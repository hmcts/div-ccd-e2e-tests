const I = actor();

module.exports = {

  fields: {
    addNewButton: 'button[type="button"]',
    chooseFile: '#D8DocumentsUploaded_0_DocumentLink',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.seeInCurrentUrl('solicitorCreateSolUploadDocs');
    await I.see('Documents uploaded (Optional)');
    await I.click(this.fields.addNewButton);
    await I.wait(2);
    await I.attachFile('input[id="D8DocumentsUploaded_0_DocumentLink"]', 'data/fileupload.txt');
    await I.waitForVisible(this.fields.submit, 20);
    await I.click(this.fields.submit);
  }
};