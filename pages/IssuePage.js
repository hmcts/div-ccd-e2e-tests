const I = actor();

module.exports = {

  fields: {
    selectActionDropDown: 'select[id="next-step"]',
    familyManReference: '#D8caseReference',
    placeOfMarriage: '#D8MarriagePlaceOfMarriage',
    petitionersFullName: '#D8MarriagePetitionerName',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.selectOption(this.fields.selectActionDropDown, 'Issue');
    await I.wait(1);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
    await I.waitForElement(this.fields.familyManReference);
    await I.runAccessibilityTest();
    await I.fillField(this.fields.familyManReference, 'EZ11D81267');
    await I.fillField(this.fields.placeOfMarriage, 'Lagos, Nigeria');
    await I.waitForElement(this.fields.submit);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};