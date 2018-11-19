const I = actor();

module.exports = {

  fields: {
    selectActionDropDown: 'select[id="next-step"]',
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
<<<<<<< HEAD
    I.waitForElement(this.fields.selectActionDropDown, 10);  
=======
    I.waitForElement(this.fields.selectActionDropDown, 20);  
>>>>>>> 023d652706abccc2e2af65b759a29a0b031ad487
    I.see('Aos pack issue test');
    I.click("//a[contains(.,'Documents')]");
    I.wait(3);
    I.see('Documents generated 1');
    I.see('Documents generated 2');
    I.wait(4);
<<<<<<< HEAD
    I.waitForElement(this.fields.selectActionDropDown, 10); 
=======
    I.waitForElement(this.fields.selectActionDropDown, 20); 
>>>>>>> 023d652706abccc2e2af65b759a29a0b031ad487
    I.selectOption(this.fields.selectActionDropDown, 'AOS Awaiting Test');
    I.wait(3);
    I.waitForVisible(this.fields.submit);
    I.click(this.fields.submit);
    I.wait(2);
  }

}