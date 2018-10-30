const I = actor();

module.exports = {

  fields: {
    reconciliationWithThePetitioner: '#SolStatementOfReconciliationCertify-Yes',
    namesAndAddressesOfPersonsQualified: '#SolStatementOfReconciliationDiscussed-Yes',
    petitionerBelievesFactsTrue: '#D8StatementOfTruth-Yes',
    amAuthorisedByPetitionerToSign: '#solSignStatementofTruth-Yes',
    yourName: '#SolStatementOfReconciliationName',
    nameOfYourFirm: '#SolStatementOfReconciliationFirm',
    additionalComments: '#StatementOfReconciliationComments',
    submit: 'button[type="submit"]',
  },

  fillFormAndSubmit() {
    I.wait(6);
    I.seeInCurrentUrl('solicitorStatementOfTruthPaySubmit/solicitorStatementOfTruthPaySubmitSolStatementOfTruth');
    I.click(this.fields.reconciliationWithThePetitioner);
    I.click(this.fields.namesAndAddressesOfPersonsQualified);
    I.click(this.fields.petitionerBelievesFactsTrue);
    I.click(this.fields.amAuthorisedByPetitionerToSign);
    I.wait(5);
    I.fillField(this.fields.yourName, 'SOLICITORNAME');
    I.fillField(this.fields.nameOfYourFirm, 'SOLICITOR DIVORCE FIRM');
    I.fillField(this.fields.additionalComments, 'additional comments');
    I.click(this.fields.submit);
    I.wait(3);
  }
}