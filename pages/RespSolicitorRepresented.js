const I = actor();
const { demoVariables, aatVariables } = require('../common/constants');
const testConfig = require('../tests/config');

module.exports = {

  fields: {
    solicitorNotRepresented: '#respondentSolicitorRepresented_No',
    solicitorRepresented: '#respondentSolicitorRepresented_Yes',
    respondentHomeAddress: '#D8DerivedRespondentHomeAddress',
    respondentServiceAddress:'#D8DerivedRespondentCorrespondenceAddr',
    respondentSolicitorName: '#D8RespondentSolicitorName',
    respondentSolicitorReference: '#respondentSolicitorReference',
    respondentSolicitorPhoneNumber: '#D8RespondentSolicitorPhone',
    respondentSolicitorEmail: '#D8RespondentSolicitorEmail',
    respondentSolicitorAddress: '#D8DerivedRespondentSolicitorAddr',
    isDigitalRespondentCase: '#RespSolDigital_Yes',
    isNotDigitalRespondentCase: '#RespSolDigital_No',
    orgNamesText: 'Organisation name and address',
    orgSearchBar: '#search-org-text',
    orgResultTable: '#organisation-table',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitInUrl('solicitorCreateRespondentServiceDetails');
    await I.runAccessibilityTest();
    await I.click(this.fields.solicitorNotRepresented);
    await I.fillField(this.fields.respondentHomeAddress, '300 Central London, Lagos W2 3MU');
    await I.fillField(this.fields.respondentServiceAddress, '007 Peter Pan Road , E14 5RT');
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  },

  async fillFormForRepresentedRespondentAndSubmit() {
    const variables = testConfig.TestEnv === 'demo'? demoVariables: aatVariables;

    await I.waitInUrl('solicitorCreateRespondentServiceDetails');
    await I.runAccessibilityTest();
    await I.click(this.fields.solicitorRepresented);
    await I.wait(1);

    await I.fillField(this.fields.respondentSolicitorName, 'MAMA AJASCO');
    await I.fillField(this.fields.respondentSolicitorReference, 'AWS11236');
    await I.fillField(this.fields.respondentSolicitorPhoneNumber, '07712345670');
    await I.fillField(this.fields.respondentSolicitorEmail, 'respsolicitor@pettyfrance.com');
    await I.fillField(this.fields.respondentSolicitorAddress, '101 Reede Road, RM10 8DU');
    await I.click(this.fields.isDigitalRespondentCase);

    await I.waitForText(this.fields.orgNamesText);
    await I.fillField(this.fields.orgSearchBar, variables.respondentSolicitorFirm);
    await I.waitForElement(this.fields.orgResultTable);
    await I.see('Select');
    await I.click('Select');
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};
