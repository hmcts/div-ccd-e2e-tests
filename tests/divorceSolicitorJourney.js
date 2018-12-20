/// <reference path="../steps.d.ts" />

const { getSolicitorLoginDetails } = require('../helpers/utils');

const solicitor = getSolicitorLoginDetails();

Feature('divorce ccd journeys ');

Scenario('solicitor login journey', (I) => {
    I.resizeWindow(1920, 1080);
    I.amOnHomePage();
    I.wait(8);
    I.login(solicitor.username, solicitor.password);
    I.shouldBeOnCaseListPage();
    I.selectACaseFromList();
    I.wait(5);
    I.shouldBeOnCaseDetailsPage();
    I.wait(13);
    I.clickTab('Notes');
    I.clickTab('Documents');
    I.clickTab('Payment');
    I.clickTab('Other legal proceedings');
    I.clickTab('Jurisdiction');
    I.clickTab('Reason for divorce');
    I.clickTab('Respondent');
    I.clickTab('Petitioner');
    I.clickTab('Corespondance');
    I.clickTab('Solicitor');
    I.clickTab('History');
    I.click('Sign Out');
    I.wait(5);
});