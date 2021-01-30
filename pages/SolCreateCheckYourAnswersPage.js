const I = actor();

module.exports = {

  fields: {
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitInUrl('solicitorCreate/submit');
    await I.waitInUrl('solicitorCreate/submit');
    await I.see('Check your answers');
    await I.see('Check the information below carefully.');
    await I.waitForVisible(this.fields.submit);
    await I.click(this.fields.submit);
  }
};