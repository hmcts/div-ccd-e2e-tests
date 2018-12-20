const I = actor();

module.exports = {

  fields: {
    selectActionDropDown: 'select[id="next-step"]',
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.waitForElement(this.fields.selectActionDropDown, 20);  
    I.see('AOS Awaiting');
    I.click("//a[contains(.,'Solicitor')]");
    I.wait(3);
    I.click("//a[contains(.,'Corespondance')]");
    I.see('Created Date');
    I.wait(3);
    I.click("//a[contains(.,'Petitioner')]");
    I.see('FamilyMan reference');
    I.see('First name(s)');
    I.see('Last name');
    I.see('Petitioner phone number');
    I.see('Place of marriage');
    I.see('Fact');
    I.wait(3);
    I.click("//a[contains(.,'Respondent')]");
    I.see('FamilyMan reference');
    I.see('Respondent\'s First name(s)');
    I.see('Respondent\'s Last name');
    I.see('What is the respondent\'s gender?');
    I.see('Fact');
    I.see('Aos Letter Holder Id');
    I.wait(3);
    I.click("//a[contains(.,'Reason for divorce')]");
    I.see('Fact');
    I.see('Behaviour details');
    I.wait(3);
    I.click("//a[contains(.,'Jurisdiction')]");
    I.click("//a[contains(.,'Other legal proceedings')]");
    I.click("//a[contains(.,'Payment')]");
    I.see('A history of payments associated with a the case');
    I.wait(2);
    I.click("//a[contains(.,'Documents')]");
    I.wait(3);
    I.see('Documents generated 1');
    I.see('Documents generated 2');
    I.wait(4);
    I.click("//a[contains(.,'Marriage Certificate')]");
    I.see('Did the marriage take place in the UK?');
    I.see('Marriage date');
    I.wait(4);
    I.click("//a[contains(.,'Notes')]");
    I.waitForElement(this.fields.selectActionDropDown, 20); 
    I.selectOption(this.fields.selectActionDropDown, 'AOS started');
    I.wait(3);
    I.waitForVisible(this.fields.submit);
    I.click(this.fields.submit);
    I.wait(2);
  }

}