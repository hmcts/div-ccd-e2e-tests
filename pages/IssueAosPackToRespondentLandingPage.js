const I = actor();

module.exports = {

  fields: {
    selectActionDropDown: 'select[id="next-step"]',
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.waitForElement(this.fields.selectActionDropDown);
    I.see('AOS Awaiting');
    I.wait(1);
    I.clickTab('Petition');
    I.see('FamilyMan reference');
    I.see('First name(s)');
    I.see('Last name');
    I.see('Petitioner\'s phone number');
    I.see('Place of marriage');
    I.see('Fact');
    I.see('Behaviour details');
    I.see('FamilyMan reference');
    I.see('Respondent\'s First name(s)');
    I.see('Respondent\'s Last name');
    I.see('What is the respondent\'s gender?');
    I.see('Fact');
    I.wait(1);
    I.clickTab('AOS');
    I.see('AOS Letter Holder ID');
    I.see('Due Date');
    I.wait(1);
    I.clickTab('Payment');
    I.see('Online payments received');
    I.wait(1);
    I.clickTab('Documents');
    I.wait(1);
    I.see('Documents uploaded 1');
    I.see('Document Url');
    I.see('Screenshot 2018-11-01 at 12.13.40.png');
    I.see('Documents generated 1');
    I.see('Documents generated 2');
    I.wait(1);
    I.clickTab('Marriage Certificate');
    I.see('Did the marriage take place in the UK?');
    I.see('Marriage date');
    I.wait(1);
    I.waitForElement(this.fields.selectActionDropDown);
    I.selectOption(this.fields.selectActionDropDown, 'AOS started');
    I.wait(1);
    I.waitForVisible(this.fields.submit);
    I.click(this.fields.submit);
    I.wait(1);
  }

};
