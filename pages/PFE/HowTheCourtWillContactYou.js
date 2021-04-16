const I = actor();

module.exports = {

  fields: {
    agreeToReceiveEmails: '#petitionerConsent',
    submit: 'input[type="submit"]'
  },

  metadata: {
    url: 'petitioner-respondent/contact-details'
  },

  async selectAgreeToReceiveEmailsAndContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.agreeToReceiveEmails);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};