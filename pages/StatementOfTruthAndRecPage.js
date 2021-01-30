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

  async fillFormAndSubmit(urgent) {
    await I.waitInUrl('solicitorStatementOfTruthPaySubmit/solicitorStatementOfTruthPaySubmitSolStatementOfTruth');
    await I.runAccessibilityTest();
    if (urgent === 'no') {
      await I.click(this.fields.caseUrgentNo);
    } else if (urgent === 'yes') {
      await I.click(this.fields.caseUrgentYes);
      await I.fillField(this.fields.caseUrgentSupportingInfoTextBox, 'here is the supporting information and instructions for the urgency');
    }
    await I.retry().click(this.fields.howToServeRespondent);
    await I.click(this.fields.reconciliationWithThePetitioner);
    await I.click(this.fields.namesAndAddressesOfPersonsQualified);
    await I.click(this.fields.petitionerBelievesFactsTrue);
    await I.click(this.fields.amAuthorisedByPetitionerToSign);
    await I.wait(1);
    await I.fillField(this.fields.yourName, 'SOLICITORNAME');
    await I.fillField(this.fields.nameOfYourFirm, 'SOLICITOR DIVORCE FIRM');
    await I.fillField(this.fields.additionalComments, 'additional comments');
    await I.click(this.fields.submit);
  }
};
