const I = actor();

module.exports = {

  fields: {
    solicitorsName: '#PetitionerSolicitorName',
    firmName: '#PetitionerSolicitorFirm',
    firmDxAddress: '#DerivedPetitionerSolicitorAddr',
    yourReferenceNumber: '#D8SolicitorReference',
    phoneNumber: '#PetitionerSolicitorPhone',
    email: '#PetitionerSolicitorEmail',
    solicitorAgree: '#SolicitorAgreeToReceiveEmails-Yes',
    submit: 'button[type="submit"]',
    OrgNamesText: 'Organisation name and address'
  },

  async fillFormAndSubmit() {
    await I.waitForElement(this.fields.solicitorsName);
    await I.runAccessibilityTest();
    await I.retry().fillField(this.fields.solicitorsName, 'PAPA AJASCO');
    await I.fillField(this.fields.firmName, 'ELEMU GETON');
    await I.fillField(this.fields.firmDxAddress, '100 Reede Road, RM10 8DU');
    await I.fillField(this.fields.yourReferenceNumber, 'AWS11234');
    await I.fillField(this.fields.phoneNumber, '07712345679');
    await I.fillField(this.fields.email, 'ccdsolicitorcreatecase@pettyfrance.com');
    await I.click(this.fields.solicitorAgree);
    await I.waitForText(this.fields.OrgNamesText);
    await I.waitForNavigationToComplete(this.fields.submit);
  }
};