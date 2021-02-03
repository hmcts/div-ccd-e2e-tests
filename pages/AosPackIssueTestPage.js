const I = actor();

module.exports = {

  fields: {
    familyManReference: '#D8caseReference',
    marriageDateday: '#D8MarriageDate-day',
    placeOfMarriage: '#D8MarriagePlaceOfMarriage',
    petitionersFullName: '#D8MarriagePetitionerName',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitForElement(this.fields.familyManReference);
    await I.runAccessibilityTest();
    await I.fillField(this.fields.familyManReference, 'EZ11D81267');
    await I.seeInField(this.fields.petitionersFullName, 'Gary Ford');
    await I.fillField(this.fields.placeOfMarriage, 'United Kingdom');
    await I.waitForElement(this.fields.submit);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};