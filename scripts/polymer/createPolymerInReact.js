const argv = require('yargs').argv;
const settings = require('../../package.json');
const fsa = require('fs-extra');
const fs = require('fs');
const path = require('path');
const Handlebars = require('handlebars');
const { Analyzer, FSUrlLoader, generateAnalysis } = require('polymer-analyzer');

console.time('createPolymerInReact');
const libName = argv._[0];
if (!libName) {
  console.log('Not found install target. Quiting...');
  return;
}

const polymer = settings.polymer;

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
const types = {
  string: 'PropTypes.string',
  Object: 'PropTypes.objectOf(PropTypes.any)',
  Array: 'PropTypes.arrayOf(PropTypes.any)',
  boolean: 'PropTypes.bool',
  number: 'PropTypes.number',
};
analyzer.analyze([bowerPath]).then((analysis) => {
  const result = generateAnalysis(
    analysis,
    '',
    feature => feature.tagName && feature.tagName === libName,
  );
  const element = result.elements[0];
  const defaults = {};
  const propsNeedStrinify = [];
  let reactClassName = element.tagname.replace(/^px-/g, '');
  reactClassName = `-${reactClassName}`.replace(/-(\w)/g, (match, group = '') =>
    group.toUpperCase(),
  );
  element.reactClassName = reactClassName;
  element.bowerPath = bowerPath;

  element.properties.forEach((property) => {
    defaults[property.name] = property.defaultValue;
  });
  element.attributes.forEach((attr) => {
    attr.reactPropName = attr.name.replace(/-(\w)/g, (match, group) => group.toUpperCase());
    attr.reactType = types[attr.type] || 'PropTypes.any';
    if (attr.type === 'object' || attr.type === 'Array') {
      propsNeedStrinify.push(attr.reactPropName);
    }
    if (defaults[attr.reactPropName]) {
      attr.defaultValue = defaults[attr.reactPropName];
    }
  });
  if (propsNeedStrinify.length) {
    element.propsNeedStrinify = JSON.stringify(propsNeedStrinify);
  }
  const componentContent = componentTpl(element);
  const indexContent = indexTpl(element);
  fsa.outputFileSync(path.join('src/components', reactClassName, 'index.js'), indexContent);
  fsa.outputFileSync(
    path.join('src/components', reactClassName, `${reactClassName}.js`),
    componentContent,
  );
  console.timeEnd('createPolymerInReact');
  console.log(`React class created at: ${path.join('src/components', reactClassName)}`);
});
