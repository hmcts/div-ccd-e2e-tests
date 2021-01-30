const {getAccessibilityTestResult} = require('./accessibility/runner');
const {generateAccessibilityReport} = require('../reporter/customReporter');
const testConfig = require('../tests/config');

class JSWait extends codecept_helper {
    _finishTest() {
        console.log('finished tests..', testConfig.TestForAccessibility);
        if (!testConfig.TestForAccessibility) {
            return;
        }
        generateAccessibilityReport(getAccessibilityTestResult());
    }
}

module.exports = JSWait;
