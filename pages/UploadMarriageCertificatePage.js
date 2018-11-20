const I = actor();

module.exports = {

  fields: {
    addNewButton: 'button[type="button"]',
    chooseFile: '#D8DocumentsUploaded_0_DocumentLink', 
    submit: 'button[type="submit"]',
  },

  fillFormAndSubmit() {
    I.seeInCurrentUrl('solicitorCreateSolUploadDocs');
    I.see('Documents uploaded (Optional)');
    I.click(this.fields.addNewButton);
    I.wait(5);
    I.attachFile('input[id="D8DocumentsUploaded_0_DocumentLink"]', 'data/fileupload.txt'); 
    I.waitForVisible(this.fields.submit, 20);
    I.click(this.fields.submit);
    I.wait(3)
  }
}