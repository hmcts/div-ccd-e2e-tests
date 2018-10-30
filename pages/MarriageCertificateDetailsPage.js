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

  fillFormAndSubmit() {
    I.waitForElement(this.fields.marriageDateDay, 10);
    I.fillField(this.fields.marriageDateDay, '09');
    I.fillField(this.fields.marriageDateMonth, '04');
    I.fillField(this.fields.marriageDateYear, '2011');
    I.fillField(this.fields.petitionerFullname, 'James St Patrick');
    I.fillField(this.fields.respondentFullname, 'Tasha St Patrick');
    I.click(this.fields.didMarriageTakePlaceInUK);
    I.click(this.fields.submit);
    I.wait(5);
    I.seeInCurrentUrl('solicitorCreateSolJurisdiction');
  }
}