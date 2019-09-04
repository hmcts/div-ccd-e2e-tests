const I = actor();

module.exports = {

  fields: {
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.waitInUrl('solicitorCreate/submit', 10);
    I.seeInCurrentUrl('solicitorCreate/submit');
    I.see('Check your answers');
    I.see('Check the information below carefully.');
    I.waitForVisible(this.fields.submit, 20);
    I.click(this.fields.submit);
  }
};