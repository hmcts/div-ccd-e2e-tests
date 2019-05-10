/// <reference path="../steps.d.ts" />

const { getSolicitorLoginDetails } = require('../helpers/utils');
const verifyLableText = require('../data/ccdFieldTabLabelNames.json');

const solicitor = getSolicitorLoginDetails();

Feature('divorce ccd journeys ');

Scenario('solicitor login journey', (I) => {
  I.amOnHomePage();
  I.wait(5);
  I.login(solicitor.username, solicitor.password);
  I.shouldBeOnCaseListPage();
  I.selectACaseFromList();
  I.wait(5);
  I.shouldBeOnCaseDetailsPage();
  I.wait(5);
  I.clickTab(verifyLableText.petitionertab.name);
  I.clickTab(verifyLableText.respondentTab.name);
  I.clickTab(verifyLableText.reasonForDivorceTab.name);
  I.clickTab(verifyLableText.jurisdictionTab.name);
  I.clickTab(verifyLableText.prayerTab.name);
  I.clickTab(verifyLableText.documentsTab.name);
  I.clickTab(verifyLableText.marriageCertificateTab.name);
  I.clickTab(verifyLableText.paymentTab.name);
  I.clickTab('Solicitor');
  I.clickTab('History');
  I.click('Sign Out');
  I.wait(5);
});
