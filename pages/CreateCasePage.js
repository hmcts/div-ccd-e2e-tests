const I = actor();
const testConfig = require('../tests/config');

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
      await I.wait(20);
    } else {
      await I.wait(5);
    }
    await I.retry(5).selectOption(this.fields.jurisdiction, 'Family Divorce');
    await I.retry(2).selectOption(this.fields.caseType, 'Divorce case - v115.00');
    await I.retry(2).selectOption(this.fields.event, 'solicitorCreate');
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};