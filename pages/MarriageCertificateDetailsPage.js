const I = actor();

module.exports = {

  fields: {
    marriageDateDay: '#D8MarriageDate-day',
    marriageDateMonth: '#D8MarriageDate-month',
    marriageDateYear: '#D8MarriageDate-year',
    petitionerFullname: '#D8MarriagePetitionerName',
    respondentFullname: '#D8MarriageRespondentName',
    didMarriageTakePlaceInUK: '#D8MarriedInUk-Yes',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitForElement(this.fields.marriageDateDay);
    await I.runAccessibilityTest();
    await I.fillField(this.fields.marriageDateDay, '09');
    await I.fillField(this.fields.marriageDateMonth, '04');
    await I.fillField(this.fields.marriageDateYear, '2011');
    await I.fillField(this.fields.petitionerFullname, 'James St Patrick');
    await I.fillField(this.fields.respondentFullname, 'Tasha St Patrick');
    await I.click(this.fields.didMarriageTakePlaceInUK);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
    await I.waitInUrl('solicitorCreateSolJurisdiction');
  }
};