const I = actor();

module.exports = {

  fields: {
    familyManReference: '#D8caseReference',
    marriageDateday: '#D8MarriageDate-day',
    placeOfMarriage: '#D8MarriagePlaceOfMarriage',
    petitionersFullName: '#D8MarriagePetitionerName',
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.waitForElement(this.fields.familyManReference);
    I.fillField(this.fields.familyManReference, 'EZ11D81267');
    I.seeInField(this.fields.petitionersFullName, 'Gary Ford');
    I.fillField(this.fields.placeOfMarriage, 'United Kingdom');
    I.waitForElement(this.fields.submit);
    I.click(this.fields.submit);
    I.wait(3);
  }
};