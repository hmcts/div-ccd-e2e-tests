const I = actor();

module.exports = {

  fields: {
    liveTogether: '#livingArrangementsLiveTogether_Yes',
    liveApart: '#livingArrangementsLiveTogether_No',
    submit: 'button[type="submit"]'
  },

  metadata: {
    url: 'petitioner-respondent/live-together'
  },

  async selectLiveTogetherAndContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.click(this.fields.liveTogether);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};