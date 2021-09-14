const {yesorno} = require('../common/constants');
const I = actor();

module.exports = {

  fields: {
    caseUrgentYes: '#SolUrgentCase_Yes',
    caseUrgentNo: '#SolUrgentCase_No',
    caseUrgentSupportingInfoTextBox: '#SolUrgentCaseSupportingInformation',
    reconciliationWithThePetitioner: '#SolStatementOfReconciliationCertify_Yes',
    namesAndAddressesOfPersonsQualified: '#SolStatementOfReconciliationDiscussed_Yes',
    petitionerBelievesFactsTrue: '#D8StatementOfTruth_Yes',
    amAuthorisedByPetitionerToSign: '#solSignStatementofTruth_Yes',
    yourName: '#SolStatementOfReconciliationName',
    nameOfYourFirm: '#SolStatementOfReconciliationFirm',
    howToServeRespondent:'#SolServiceMethod-courtService',
    additionalComments: '#StatementOfReconciliationComments',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit(urgent) {
    await I.waitInUrl('solicitorStatementOfTruthPaySubmit/solicitorStatementOfTruthPaySubmitSolStatementOfTruth');
    await I.runAccessibilityTest();
    if (urgent === yesorno.No) {
      await I.click(this.fields.caseUrgentNo);
    } else if (urgent === yesorno.Yes) {
      await I.click(this.fields.caseUrgentYes);
      await I.fillField(this.fields.caseUrgentSupportingInfoTextBox, 'here is the supporting information and instructions for the urgency');
    }
    await I.retry().click(this.fields.howToServeRespondent);
    await I.click(this.fields.reconciliationWithThePetitioner);
    await I.click(this.fields.namesAndAddressesOfPersonsQualified);
    await I.click(this.fields.petitionerBelievesFactsTrue);
    await I.click(this.fields.amAuthorisedByPetitionerToSign);
    await I.fillField(this.fields.yourName, 'SOLICITORNAME');
    await I.fillField(this.fields.nameOfYourFirm, 'SOLICITOR DIVORCE FIRM');
    await I.fillField(this.fields.additionalComments, 'additional comments');
    await I.waitForNavigationToComplete(this.fields.submit);
  }
};
