const settings = require('../package.json');
const fsa = require('fs-extra');
const path = require('path');
const { Analyzer, FSUrlLoader, generateAnalysis } = require('polymer-analyzer');

const polymer = settings.polymer;

const elementKeys = Object.keys(polymer);
const analyzer = new Analyzer({
  urlLoader: new FSUrlLoader('bower_components'),
});

const isInPackage = feature => feature.tagName && elementKeys.indexOf(feature.tagName) > -1;
analyzer.analyze(Object.values(polymer)).then((analysis) => {
  const result = generateAnalysis(analysis, '', isInPackage);
  const meta = {};
  result.elements.forEach((element) => {
    meta[element.tagname] = element.events;
  });
  const filePath = path.join('src/utils/polymer/meta.json');
  fsa.outputFileSync(filePath, JSON.stringify(meta));
});
