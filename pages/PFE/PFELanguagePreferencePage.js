const I = actor();

module.exports = {

  fields: {
    existingLanguagePreferences: '#languagePreferenceWelsh_No',
    submit: 'input[type="submit"]'
  },

  metadata: {
    url: 'screening-questions/language-preference'
  },

  async selectEnglishAsLanguageAndSubmit() {
    console.log('1');
    await I.waitInUrl(this.metadata.url);
    console.log('2');
    await I.runAccessibilityTest();
    console.log('3');
    await I.click(this.fields.existingLanguagePreferences);
    console.log('4');
    await I.waitForNavigationToComplete(this.fields.submit);
    console.log('5');
    await I.wait(1);
  }
};