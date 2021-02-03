const I = actor();
const testConfig = require('../tests/config');

module.exports = {

  fields: {
    addNewButton: 'button[type="button"]',
    chooseFile: 'input[id="D8DocumentsUploaded_0_DocumentLink"]',
    fileComment: '#D8DocumentsUploaded_0_DocumentComment',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitInUrl('solicitorCreateSolUploadDocs');
    await I.runAccessibilityTest();
    await I.see('Documents uploaded (Optional)');
    /* eslint-disable no-console */
    console.log("isMicrosoftEdgeBrowser.......", I.isMicrosoftEdgeBrowser());
    if (testConfig.TestForCrossBrowser && !I.isMicrosoftEdgeBrowser()) {
      await I.click(this.fields.addNewButton);
      await I.attachFile(this.fields.chooseFile, 'data/fileupload.txt');
      await I.fillField(this.fields.fileComment, 'Uploading a dummy file');
    }
    await I.wait(2);
    await I.waitForNavigationToComplete(this.fields.submit);
  }
};