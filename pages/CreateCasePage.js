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
    await I.waitForText('Family Divorce');
    await I.retry(2).selectOption(this.fields.jurisdiction, 'Family Divorce');
    await I.waitForText('Divorce case - v115.00');
    await I.retry(2).selectOption(this.fields.caseType, 'Divorce case - v115.00');
    await I.waitForText('Appy for a divorce');
    await I.retry(2).selectOption(this.fields.event, 'Appy for a divorce');
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};