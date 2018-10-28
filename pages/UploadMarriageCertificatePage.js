const I = actor();

module.exports = {

  fields: {
    addNewButton: 'button[type="button"]',
    submit: 'button[type="submit"]',
  },

  fillFormAndSubmit() {
    I.seeInCurrentUrl('solicitorCreateSolUploadDocs');
    I.see('Documents uploaded (Optional)');
    I.click(this.fields.addNewButton);
    I.click(this.fields.submit);
    I.wait(3)
  }
}