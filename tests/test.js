/// <reference path="../steps.d.ts" />

Feature('automate ccd');

Scenario('test login', (I) => {
    I.resizeWindow(1920, 1080);
    I.amOnHomePage();
    I.login('michael.osinloye@hmcts.net','Ayomide24');
    I.shouldBeOnCaseListPage();
    I.selectACaseFromList();
    I.shouldBeOnCaseDetailsPage();
    I.clickTab('Payment history');
    I.clickTab('AOS');
    I.clickTab('Admin check');
    I.clickTab('Documents');
    I.clickTab('Payment');
    I.clickTab('Prayer');
    I.clickTab('Other legal proceedings');
    I.clickTab('Jurisdiction');
    I.clickTab('Reason for divorce');
    I.clickTab('Marriage certificate');
    I.clickTab('Respondent');
    I.clickTab('Petitioner');
    I.clickTab('Solicitor');
    I.clickTab('History');
    I.click('Sign Out');
    I.wait(8);
});