const I = actor();

module.exports = {

  fields: {
    marriageDateDay: '#marriageDateDay',
    marriageDateMonth: '#marriageDateMonth',
    marriageDateYear: '#marriageDateYear',
    submit: 'input[type="submit"]'
  },

  metadata: {
    url: 'date-of-marriage-certificate'
  },

  async enterTwoYearsAgoAndContinue() {
    await I.waitInUrl(this.metadata.url);
    await I.runAccessibilityTest();
    await I.fillField(this.fields.marriageDateDay, '01');
    await I.fillField(this.fields.marriageDateMonth, new Date().getMonth());
    await I.fillField(this.fields.marriageDateYear, new Date().getFullYear() - 2);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};