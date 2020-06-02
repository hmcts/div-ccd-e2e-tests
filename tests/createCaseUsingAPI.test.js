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

Scenario('reason-five-years-separation', async function (I) {
  const caseId = await createCaseInCcd('data/div-reason-five-years-separation.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');
});

Scenario('div-reason-unreasonablebehaviour', async function (I) {
  const caseId = await createCaseInCcd('data/div-reason-unreasonablebehaviour.json');
  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');
});

//Scenario('div-reason-samesex', async function (I) {
//  const caseId = await createCaseInCcd('data/div-reason-samesex.json');
//  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');
//});
//
//Scenario('div-reason-two-years-separation', async function (I) {
//  const caseId = await createCaseInCcd('data/div-reason-two-years-separation.json');
//  const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision', 'data/ccd-update-data.json');
//});
