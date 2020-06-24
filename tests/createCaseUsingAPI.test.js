/// <reference path="../steps.d.ts" />

const { createCaseInCcd, updateCaseInCcd, getCaseWorkerLoginDetails } = require('../helpers/utils');

const caseWorker = getCaseWorkerLoginDetails();

Feature('Create Case using API');

Scenario('ccd-basic-data', async function (I) {
  const caseId = await createCaseInCcd('data/ccd-basic-data.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');
});

Scenario('div-reason-adultery', async function (I) {
  const caseId = await createCaseInCcd('data/div-reason-adultery.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');
});

Scenario('div-reason-desertion', async function (I) {
  const caseId = await createCaseInCcd('data/div-reason-desertion.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');
});

Scenario('div-reason-five-years-separation', async function (I) {
  const caseId = await createCaseInCcd('data/div-reason-five-years-separation.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');
});

Scenario('div-reason-unreasonablebehaviour', async function (I) {
  const caseId = await createCaseInCcd('data/div-reason-unreasonablebehaviour.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');
});

Scenario('div-reason-2-year-separation-with-consent-by-sol', async function (I) {
  const caseId = await createCaseInCcd('data/div-reason-2-year-separation-with-consent-by-sol.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');
});

//Scenario('div-reason-samesex', async function (I) {
//  const caseId = await createCaseInCcd('data/div-reason-samesex.json');
//  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');
//});
//
Scenario('div-reason-two-years-separation', async function (I) {
  const caseId = await createCaseInCcd('data/div-reason-two-years-separation.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');
});


Scenario('div-reason-adultery-DIV-6013', async function (I) {
  const caseId = await createCaseInCcd('data/div-reason-adultery-DIV-6013.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');
});


Scenario('ccdAdulteryRespondentCorespondentDefendedCase', async function (I) {
  const caseId = await createCaseInCcd('data/ccdAdulteryRespondentCorespondentDefendedCase.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');
});

Scenario('div-reason-adultery-cost-claim', async function (I) {
  const caseId = await createCaseInCcd('data/div-reason-adultery-cost-claim.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');
});

