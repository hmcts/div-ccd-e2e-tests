const I = actor();

module.exports = {

  fields: {
    addNewButton: 'button[type="button"]',
    chooseFile: 'input[id="D8DocumentsUploaded_0_DocumentLink"]',
    fileComment: '#D8DocumentsUploaded_0_DocumentComment',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitInUrl('solicitorCreateSolUploadDocs');
    await I.see('Documents uploaded (Optional)');
    await I.click(this.fields.addNewButton);
    await I.wait(1);
    await I.attachFile(this.fields.chooseFile, 'data/fileupload.txt');
    await I.fillField(this.fields.fileComment, 'Uploading a dummy file');
    await I.wait(1);
    await I.waitForVisible(this.fields.submit);
    await I.click(this.fields.submit);
  }
};