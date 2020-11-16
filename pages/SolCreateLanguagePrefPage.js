const I = actor();

module.exports = {

  fields: {
    existingLanguagePreferences: '#LanguagePreferenceWelsh-No',
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.seeInCurrentUrl('solicitorCreatelangPref');
    I.click(this.fields.existingLanguagePreferences);
    I.click(this.fields.submit);
    I.wait(2);
  }
};