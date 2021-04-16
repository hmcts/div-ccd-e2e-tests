const { createCaseInCcd, updateCaseInCcd } = require('../helpers/utils');
const { eventDisplayName, signOut } = require('../common/constants');
const testconfig = require('./config');

let caseId;

Feature('Testing CCD Create and Update as well as Caseworker change AOS States');

Scenario('Create and Update as well as caseworker change AOS states', async function (I) {
  caseId = await createCaseInCcd('data/ccd-basic-data.json');
  await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');

  await I.amOnHomePage();
  await I.login(testconfig.TestEnvCWUser, testconfig.TestEnvCWPassword);
  await I.shouldBeOnCaseListPage();
  await I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  await I.wait(1);
  await I.ccdCaseCreatedFromJsonLandingPageFormAndSubmit();
  await I.changeToCourtsAndTribunalsServiceCentrePageFormAndSubmit();
  await I.enterRDCChangeSummaryAndDescriptionPageFormAndSubmit();
  await I.caseCreatedCTSCServiceCentrePageFormAndSubmit();
  await I.issueFromSubmittedPageFormAndSubmit();
  await I.issueCheckYourAnswersPageFormAndSubmit();
  await I.petitionIssuedPageAndAosPackSelectPageFormAndSubmit();
  await I.aosPackIssueTestCheckYourAnswersPageFormAndSubmit();
  await I.aosPackToRespondentLandingPageFormAndSubmit();
  await I.aosStartedPageFormAndSubmit();
  await I.aosStartedCheckYourAnswersPageFormAndSubmit();
  await I.click(signOut);
}).retry(testconfig.TestRetryScenarios);

Scenario('Caseworker change DN events', async function (I) {
  await I.amOnHomePage();
  await I.login(testconfig.TestEnvCWUser, testconfig.TestEnvCWPassword);
  await I.shouldBeOnCaseListPage();
  await I.amOnPage('/case/DIVORCE/DIVORCE/' + caseId);
  await I.wait(1);
  await I.aosReceivedUndefendedMoveToDNFormSubmit();
  await I.selectAndSubmitEvent(eventDisplayName.DN_RECEIVED);
  await I.selectAndSubmitEvent(eventDisplayName.REFER_TO_LEGAL_ADVSIOR);
  await I.selectAndSubmitEvent(eventDisplayName.ENTITLEMENT_GRANTED);
  await I.selectAndSubmitEvent(eventDisplayName.DN_PRONOUNCED_BY_BULK);
  await I.setTestDataForDA();
  await I.selectAndSubmitEvent(eventDisplayName.MAKE_ELIGIBLE_FOR_DA);
  await I.selectAndSubmitEvent(eventDisplayName.DA_GRANTED);
  await I.wait(5);
  await I.click(signOut);
}).retry(testconfig.TestRetryScenarios);
