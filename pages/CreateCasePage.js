const I = actor();

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
    await I.wait(5);
    await I.retry(5).selectOption(this.fields.jurisdiction, 'DIVORCE');
    await I.retry(2).selectOption(this.fields.caseType, 'DIVORCE');
    await I.retry(2).selectOption(this.fields.event, 'solicitorCreate');
    await I.click(this.fields.submit);
    await I.wait(1);
  }
};