const npmSettings = require('../../package.json');
const bowerSettings = require('../../bower.json');
const fse = require('fs-extra');
const path = require('path');
const { Analyzer, FSUrlLoader, generateAnalysis } = require('polymer-analyzer');

console.time('analyze');
const npmPolymer = npmSettings.polymer || [];
const bowerDependencies = bowerSettings.dependencies || [];

let libsToSearch = Object.keys(bowerDependencies).filter(bowerDependency =>
  fse.existsSync(path.join('bower_components', bowerDependency, `${bowerDependency}.html`)),
);
let filesToAnalyze = libsToSearch.map(libToSearch => path.join(libToSearch, `${libToSearch}.html`));
libsToSearch = libsToSearch.concat(Object.keys(npmPolymer));
filesToAnalyze = filesToAnalyze.concat(Object.values(npmPolymer));

const analyzer = new Analyzer({
  urlLoader: new FSUrlLoader('bower_components'),
});

const isInPackage = feature => feature.tagName && libsToSearch.indexOf(feature.tagName) > -1;
analyzer.analyze(filesToAnalyze).then((analysis) => {
  const result = generateAnalysis(analysis, '', isInPackage);
  const meta = {};
  result.elements.forEach((element) => {
    meta[element.tagname] = element.events;
  });
  const filePath = path.join('src/utils/polymer/meta.json');
  fse.outputFileSync(filePath, JSON.stringify(meta));
  console.timeEnd('analyze');
});
