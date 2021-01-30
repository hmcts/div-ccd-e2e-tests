const I = actor();

module.exports = {

  fields: {
    addNewButton: 'button[type="button"]',
    chooseFile: '#D8DocumentsUploaded_0_DocumentLink',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitInUrl('solicitorCreateSolUploadDocs');
    await I.see('Documents uploaded (Optional)');
    await I.click(this.fields.addNewButton);
    await I.wait(1);
    await I.attachFile('input[id="D8DocumentsUploaded_0_DocumentLink"]', 'data/fileupload.txt');
    await I.wait(1);
    await I.waitForVisible(this.fields.submit);
    await I.click(this.fields.submit);
  }
};