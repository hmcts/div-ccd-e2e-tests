const I = actor();

module.exports = {

  fields: {
    caseUrgentYes: '#SolUrgentCase-Yes',
    caseUrgentNo: '#SolUrgentCase-No',
    caseUrgentSupportingInfoTextBox: '#SolUrgentCaseSupportingInformation',
    reconciliationWithThePetitioner: '#SolStatementOfReconciliationCertify-Yes',
    namesAndAddressesOfPersonsQualified: '#SolStatementOfReconciliationDiscussed-Yes',
    petitionerBelievesFactsTrue: '#D8StatementOfTruth-Yes',
    amAuthorisedByPetitionerToSign: '#solSignStatementofTruth-Yes',
    yourName: '#SolStatementOfReconciliationName',
    nameOfYourFirm: '#SolStatementOfReconciliationFirm',
    howToServeRespondent:'#SolServiceMethod-courtService',
    additionalComments: '#StatementOfReconciliationComments',
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit(urgent) {
    I.wait(1);
    I.seeInCurrentUrl('solicitorStatementOfTruthPaySubmit/solicitorStatementOfTruthPaySubmitSolStatementOfTruth');
    if (urgent === 'no') {
      I.click(this.fields.caseUrgentNo);
    } else if (urgent === 'yes') {
      I.click(this.fields.caseUrgentYes);
      I.fillField(this.fields.caseUrgentSupportingInfoTextBox, 'here is the supporting information and instructions for the urgency');
    }
    I.retry().click(this.fields.howToServeRespondent);
    I.click(this.fields.reconciliationWithThePetitioner);
    I.click(this.fields.namesAndAddressesOfPersonsQualified);
    I.click(this.fields.petitionerBelievesFactsTrue);
    I.click(this.fields.amAuthorisedByPetitionerToSign);
    I.wait(1);
    I.fillField(this.fields.yourName, 'SOLICITORNAME');
    I.fillField(this.fields.nameOfYourFirm, 'SOLICITOR DIVORCE FIRM');
    I.fillField(this.fields.additionalComments, 'additional comments');
    I.click(this.fields.submit);
    I.wait(1);
  }
};
