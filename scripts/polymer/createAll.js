const npmSettings = require('../../package.json');
const bowerSettings = require('../../bower.json');
const fse = require('fs-extra');
const path = require('path');
const shelljs = require('shelljs');

console.time('batch convert polymer to react');
const npmPolymer = npmSettings.polymer || [];
const bowerDependencies = bowerSettings.dependencies || [];

let libsToConvert = Object.keys(bowerDependencies).filter(
  bowerDependency =>
    bowerDependency !== 'polymer' &&
    fse.existsSync(path.join('bower_components', bowerDependency, `${bowerDependency}.html`)),
);
libsToConvert = libsToConvert.concat(Object.keys(npmPolymer));
libsToConvert.forEach(lib => {
  shelljs.exec(`npm run create-polymer-in-react ${lib}`);
});
console.timeEnd('batch convert polymer to react');
