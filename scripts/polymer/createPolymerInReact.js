const argv = require('yargs').argv;
const settings = require('../../package.json');
const fsa = require('fs-extra');
const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const { Analyzer, FSUrlLoader, generateAnalysis } = require('polymer-analyzer');

const libName = argv._[0];
if (!libName) {
  console.log('Not found install target. Quiting...');
  return;
}
console.log(`Creating react wrapper for ${libName}`);
console.time('createPolymerInReact');

const polymer = settings.polymer || {};

let bowerPath = polymer[libName];
if (!bowerPath) {
  bowerPath = path.join(libName, `${libName}.html`);
  if (!fsa.existsSync(path.join('bower_components', bowerPath))) {
    console.log(`bowerPath:${bowerPath} not found for ${libName}. Quiting...`);
    return;
  }
}

const analyzer = new Analyzer({
  urlLoader: new FSUrlLoader('bower_components'),
});
const componentTplContent = fs.readFileSync(path.join('scripts/polymer/template/Component.tpl'), {
  encoding: 'utf8',
});
const componentTpl = Handlebars.compile(componentTplContent, {
  noEscape: true,
});
const indexTplContent = fs.readFileSync(path.join('scripts/polymer/template/index.tpl'), {
  encoding: 'utf8',
});
const indexTpl = Handlebars.compile(indexTplContent, {
  noEscape: true,
});
const testTplContent = fs.readFileSync(path.join('scripts/polymer/template/Component.test.tpl'), {
  encoding: 'utf8',
});
const testTpl = Handlebars.compile(testTplContent, {
  noEscape: true,
});

const types = {
  string: 'PropTypes.string',
  Object: 'PropTypes.objectOf(PropTypes.any)',
  Array: 'PropTypes.arrayOf(PropTypes.any)',
  boolean: 'PropTypes.bool',
  number: 'PropTypes.number',
};

analyzer.analyze([bowerPath]).then(analysis => {
  const result = generateAnalysis(
    analysis,
    '',
    feature => feature.tagName && feature.tagName === libName,
  );
  const element = result.elements[0];
  const defaults = {};
  let reactClassName = element.tagname.replace(/^px-/g, '');
  reactClassName = `-${reactClassName}`.replace(/-(\w)/g, (match, group = '') =>
    group.toUpperCase(),
  );
  element.reactClassName = reactClassName;
  element.bowerPath = bowerPath;

  element.properties.forEach(property => {
    if (property.defaultValue) {
      defaults[property.name] = property.defaultValue;
    }
  });
  element.attributes.forEach(attr => {
    attr.reactPropName = attr.name.replace(/-(\w)/g, (match, group) => group.toUpperCase());
    attr.reactType = types[attr.type] || 'PropTypes.any';
    if (defaults[attr.reactPropName]) {
      attr.defaultValue = defaults[attr.reactPropName];
    }
    if (attr.description) {
      attr.description = attr.description.replace(/\n/g, '\n   * ');
    }
  });
  if (Object.keys(defaults).length) {
    element.hasDefaults = true;
  }
  element.events.forEach(event => {
    const reactPropName = `-${event.name}`.replace(/-(\w)/g, (match, group) => group.toUpperCase());
    event.reactPropName = `on${reactPropName}`;
  });
  if (!element.events.length) {
    delete element.events;
  }
  const componentContent = componentTpl(element);
  const indexContent = indexTpl(element);
  const testContent = testTpl(element);
  fsa.outputFileSync(path.join('src/components', reactClassName, 'index.js'), indexContent);
  fsa.outputFileSync(
    path.join('src/components', reactClassName, `${reactClassName}.js`),
    componentContent,
  );
  fsa.outputFileSync(
    path.join('src/components', reactClassName, `${reactClassName}.test.js`),
    testContent,
  );
  console.timeEnd('createPolymerInReact');
  console.log(`React class created at: ${path.join('src/components', reactClassName)}`);
});
