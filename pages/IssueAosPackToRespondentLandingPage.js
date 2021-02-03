const I = actor();

module.exports = {

  fields: {
    selectActionDropDown: 'select[id="next-step"]',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitForElement(this.fields.selectActionDropDown);
    await I.see('AOS Awaiting');
    await I.wait(1);
    await I.clickTab('Petition');
    await I.see('FamilyMan reference');
    await I.see('First name(s)');
    await I.see('Last name');
    await I.see('Petitioner\'s phone number');
    await I.see('Place of marriage');
    await I.see('Fact');
    await I.see('Behaviour details');
    await I.see('FamilyMan reference');
    await I.see('Respondent\'s First name(s)');
    await I.see('Respondent\'s Last name');
    await I.see('What is the respondent\'s gender?');
    await I.see('Fact');
    await I.wait(1);
    await I.clickTab('AOS');
    await I.see('AOS Letter Holder ID');
    await I.see('Due Date');
    await I.wait(1);
    await I.clickTab('Payment');
    await I.see('Online payments received');
    await I.wait(1);
    await I.clickTab('Documents');
    await I.wait(1);
    await I.see('Documents uploaded 1');
    await I.see('Document Url');
    await I.see('Screenshot 2018-11-01 at 12.13.40.png');
    await I.see('Documents generated 1');
    await I.see('Documents generated 2');
    await I.wait(1);
    await I.clickTab('Marriage Certificate');
    await I.see('Did the marriage take place in the UK?');
    await I.see('Marriage date');
    await I.wait(1);
    await I.waitForElement(this.fields.selectActionDropDown);
    await I.selectOption(this.fields.selectActionDropDown, 'AOS started');
    await I.wait(1);
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }

};
