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
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.retry().fillField(this.fields.solicitorsName, 'PAPA AJASCO');
    I.fillField(this.fields.firmName, 'ELEMU GETON');
    I.fillField(this.fields.firmDxAddress, '100 Reede Road, RM10 8DU');
    I.fillField(this.fields.yourReferenceNumber, 'AWS11234');
    I.fillField(this.fields.phoneNumber, '07712345679');
    I.fillField(this.fields.email, 'ccdsolicitorcreatecase@pettyfrance.com');
    I.click(this.fields.solicitorAgree);
    I.wait(5);
    I.click(this.fields.submit);
  }
};