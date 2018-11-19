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
<<<<<<< HEAD
    I.waitForElement(this.fields.familyManReference, 10);
    I.fillField(this.fields.familyManReference, 'EZ11D81267');
    I.seeInField(this.fields.petitionersFullName, 'Gary Ford');
    I.fillField(this.fields.placeOfMarriage, 'United Kingdom');
    I.waitForElement(this.fields.submit, 10);
=======
    I.waitForElement(this.fields.familyManReference, 20);
    I.fillField(this.fields.familyManReference, 'EZ11D81267');
    I.seeInField(this.fields.petitionersFullName, 'Gary Ford');
    I.fillField(this.fields.placeOfMarriage, 'United Kingdom');
    I.waitForElement(this.fields.submit, 20);
>>>>>>> 023d652706abccc2e2af65b759a29a0b031ad487
    I.click(this.fields.submit);
    I.wait(3);
  }
}