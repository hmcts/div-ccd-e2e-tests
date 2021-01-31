const I = actor();

module.exports = {

  fields: {
    existingLanguagePreferences: '#LanguagePreferenceWelsh-No',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitInUrl('solicitorCreatelangPref');
    await I.runAccessibilityTest();
    await I.click(this.fields.existingLanguagePreferences);
    await I.click(this.fields.submit);
    await I.wait(1);
  }
};