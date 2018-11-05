/// <reference path="../steps.d.ts" />

const { createCaseInCcd, updateCaseInCcd } = require('../helpers/utils');

Feature('Testing CCD Create and Update');

Scenario('Create and Update', async function (I) {
    const caseId = await createCaseInCcd();
    const response = await updateCaseInCcd(caseId, 'hwfApplicationAcceptedfromAwaitingHWFDecision');

    I.resizeWindow(1920, 1080);
    I.amOnHomePage();
});