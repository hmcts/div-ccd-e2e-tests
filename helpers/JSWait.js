const {getAccessibilityTestResult} = require('./accessibility/runner');
const {generateAccessibilityReport} = require('../reporter/customReporter');
const testConfig = require('../tests/config');

class JSWait extends codecept_helper {
  _finishTest() {
    console.log('executing accessibility reports after all tests');
    if (!testConfig.TestForAccessibility) {
      return;
    }
    generateAccessibilityReport(getAccessibilityTestResult());
  }
}

module.exports = JSWait;
