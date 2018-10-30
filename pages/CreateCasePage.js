const I = actor();

module.exports = {

  fields: {
    jurisdiction: 'select[id="cc-jurisdiction"]',
    caseType: 'select[id="cc-case-type"]',
    event: 'select[id="cc-event"]',
    submit: 'button[type="submit"]',
  },

  fillFormAndSubmit() {
    I.wait(5);
    I.selectOption(this.fields.jurisdiction, 'DIVORCE');
    I.wait(5);
    I.selectOption(this.fields.caseType, 'DIVORCE');
    I.wait(5);
    I.selectOption(this.fields.event, 'solicitorCreate');
    I.click(this.fields.submit);
    I.wait(8)
  }
}