const I = actor();

module.exports = {

  fields: {
    selectActionDropDown: 'select[id="next-step"]',
    familyManReference: '#D8caseReference',
    placeOfMarriage: '#D8MarriagePlaceOfMarriage',
    petitionersFullName: '#D8MarriagePetitionerName',
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.selectOption(this.fields.selectActionDropDown, 'Issue');
    I.wait(1);
    I.waitForVisible(this.fields.submit);
    I.click(this.fields.submit);
    I.wait(1);
    I.waitForElement(this.fields.familyManReference);
    I.fillField(this.fields.familyManReference, 'EZ11D81267');
    I.fillField(this.fields.placeOfMarriage, 'Lagos, Nigeria');
    I.waitForElement(this.fields.submit);
    I.click(this.fields.submit);
    I.wait(3);
  }
};