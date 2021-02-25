const fs = require('fs');
const testConfig = require('../tests/config');

function generateAccessibilityReport(reportJson) {
  consoleReport(reportJson);

  const result = 'var replacejsoncontent = ' + JSON.stringify(reportJson);

  const sourceReport = __dirname + '/Report.html';
  const destReport = testConfig.TestOutputDir + '/a11y.html';
  const destJson = testConfig.TestOutputDir + '/a11y_output.js';

  fs.copyFileSync(sourceReport, destReport);
  fs.writeFileSync(destJson, result);
  copyResources();

}

function copyResources() {
  const resourceDir = testConfig.TestOutputDir + '/resources/';
  const cssDir = resourceDir + 'css/';
  if (!fs.existsSync(cssDir)) {
    fs.mkdirSync(cssDir, {recursive: true});
  }

  const webfontsDir = resourceDir + 'webfonts/';
  if (!fs.existsSync(webfontsDir)) {
    fs.mkdirSync(webfontsDir, {recursive: true});
  }

  fs.copyFileSync(__dirname + '/resources/angular.min.js', resourceDir + 'angular.min.js');
  fs.copyFileSync(__dirname + '/resources/css/all.css', cssDir + 'all.css');
  fs.copyFileSync(__dirname + '/resources/webfonts/fa-solid-900.woff2', webfontsDir + 'fa-solid-900.woff2');
}

/* eslint-disable no-unused-vars */
function consoleReport(reportjson) {
  /* eslint-disable no-console */
  console.log('\t Total tests : ' + reportjson.tests.length);
  console.log('\t Passed tests : ' + reportjson.passCount);
  console.log('\t Failed tests : ' + reportjson.passCount);
}
/* eslint-enable no-unused-vars */

module.exports = {generateAccessibilityReport};
