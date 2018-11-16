const I = actor();

module.exports = {

  fields: {
    familyManReference: '#D8caseReference',
    placeOfMarriage: '#D8MarriagePlaceOfMarriage',
    petitionersFullName: '#D8MarriagePetitionerName',
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.waitForElement(this.fields.familyManReference, 20);
    I.fillField(this.fields.familyManReference, 'EZ11D81267');
    // I.seeInField('petitionsFullName', 'Gary Ford');
    I.seeInField(this.fields.petitionersFullName, 'Gary Ford');
    I.fillField(this.fields.placeOfMarriage, 'Lagos, Nigeria');
    I.waitForElement(this.fields.submit, 20);
    I.click(this.fields.submit);
    I.wait(3);
  }
}