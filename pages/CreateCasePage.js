const I = actor();
const testConfig = require('../tests/config');
const { demoVariables, aatVariables } = require('../common/constants');

module.exports = {

  fields: {
    jurisdiction: 'select[id="cc-jurisdiction"]',
    caseType: 'select[id="cc-case-type"]',
    event: 'select[id="cc-event"]',
    submit: 'button[type="submit"]'
  },

  async clickCreateCase() {
    await I.waitForText('Create case');
    await I.click('Create case');
  },

  async fillFormAndSubmit() {
    if (testConfig.TestForCrossBrowser) {
      await I.wait(60);
    } else {
      await I.wait(5);
    }

    const variables = testConfig.TestEnv === 'demo'? demoVariables: aatVariables;

    await I.waitForText(variables.familyDivorceText);
    await I.retry(5).selectOption(this.fields.jurisdiction, variables.familyDivorceText);
    await I.retry(5).selectOption(this.fields.caseType, 'Divorce case - v115.00');
    await I.waitForText('Apply for a divorce');
    await I.retry(5).selectOption(this.fields.event, 'Apply for a divorce');
    await I.wait(2);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};