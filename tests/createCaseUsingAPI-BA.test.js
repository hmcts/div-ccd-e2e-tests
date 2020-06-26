/// <reference path="../steps.d.ts" />

const { createCaseInCcd, updateCaseInCcd, getCaseWorkerLoginDetails } = require('../helpers/utils');

const caseWorker = getCaseWorkerLoginDetails();

Feature('Create all tyupe of BA scenarios using API');

Scenario('div-BA-2-year-separation-with-consent', async function (I) {
  const caseId = await createCaseInCcd('data/div-BA-2-year-separation-with-consent.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');
});

Scenario('div-BA-5-year-separation', async function (I) {
  const caseId = await createCaseInCcd('data/div-BA-5-year-separation.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');
});

Scenario('div-BA-Adultery', async function (I) {
  const caseId = await createCaseInCcd('data/div-BA-Adultery.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');
});

Scenario('div-BA-Adultery-cost-claim', async function (I) {
  const caseId = await createCaseInCcd('data/div-BA-Adultery-cost-claim.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');
});

Scenario('div-BA-behaviour', async function (I) {
  const caseId = await createCaseInCcd('data/div-BA-behaviour.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');
});

Scenario('div-BA-desertion', async function (I) {
  const caseId = await createCaseInCcd('data/div-BA-desertion.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');
});


Scenario('div-BA-Adultery-cost-claim-new', async function (I) {
  const caseId = await createCaseInCcd('data/div-BA-Adultery-cost-claim-new.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');
});


