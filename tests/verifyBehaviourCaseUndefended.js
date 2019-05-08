/// <reference path="../steps.d.ts" />

const { createCaseInCcd, updateCaseInCcd, getCaseWorkerLoginDetails } = require('../helpers/utils');
const verifyContent = require('../data/ccdBehaviourUnDefendedCase.json');
const verifyLableText = require('../data/ccdFieldTabLabelNames.json');
const caseWorker = getCaseWorkerLoginDetails();

Feature('verify behaviour case ');

Scenario('Behaviour case Undefended', async function (I) {
  const caseId = await createCaseInCcd('data/ccdBehaviourUnDefendedCase.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision');
  const submitted = await updateCaseInCcd(caseId, 'issueFromSubmitted');
  const issueAOS = await updateCaseInCcd(caseId, 'issueAos');
  const startAOS = await updateCaseInCcd(caseId, 'startAos');
  const aosSubmittedUndefended = await updateCaseInCcd(caseId, 'aosSubmittedUndefended');
  const dnApplied = await updateCaseInCcd(caseId, 'dnReceived');

  I.amOnHomePage();
  I.login(caseWorker.username, caseWorker.password);
  I.shouldBeOnCaseListPage();
  I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  I.wait(5);


  // Verify Marriage Certificate Tab
  I.clickTab(verifyLableText.marriageCertificateTab.name);
  I.see(verifyLableText.marriageCertificateTab.petitionerFullNameMarriageCertificate);
  I.see(verifyContent.D8MarriagePetitionerName);
  I.see(verifyLableText.marriageCertificateTab.respondnetFullNameMarriageCertificate);
  I.see(verifyContent.D8MarriageRespondentName);
  I.see(verifyLableText.marriageCertificateTab.dateofMarriage);
  I.see('2 Mar 2015');
  I.see(verifyLableText.marriageCertificateTab.isMarriageTookPlaceInUK);
  I.see(verifyLableText.general.yes);
  I.see(verifyLableText.marriageCertificateTab.placeOfMarriage);
  I.see(verifyContent.D8MarriagePlaceOfMarriage);

  // Verify Confidential Petitioner Tab
  I.clickTab(verifyLableText.confidentialPetitionerTab.name);
  I.see(verifyLableText.confidentialPetitionerTab.petitionerServiceAddress);
  I.see(verifyContent.D8DerivedPetitionerCorrespondenceAddr);
  I.see(verifyLableText.confidentialPetitionerTab.petitionerEmail);
  I.see(verifyContent.D8PetitionerEmail);
  I.see(verifyLableText.confidentialPetitionerTab.petitionerHomeAddress);
  I.see(verifyContent.D8DerivedPetitionerHomeAddress);

  // Verify Documents Tab
  I.clickTab(verifyLableText.documentsTab.name);
  I.see(verifyLableText.documentsTab.documentsUploadedPFEStage);
  I.see(verifyLableText.documentsTab.pfeUploadedDoc);
  I.see(verifyLableText.documentsTab.documentsGenerated);
  I.see(verifyLableText.documentsTab.d8petitionText+caseId+verifyLableText.documentsTab.documentgeneratedExtension);
  I.see(verifyLableText.documentsTab.aosInvitationText+caseId+verifyLableText.documentsTab.documentgeneratedExtension);
  I.see(verifyLableText.documentsTab.respondentAnswersText);
  I.see(verifyLableText.documentsTab.documentsUploadedDNStage);
  I.see(verifyLableText.documentsTab.dnUploadedDoc);


  I.click('Sign Out');
});
