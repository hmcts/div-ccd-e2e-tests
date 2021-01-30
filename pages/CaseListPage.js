const I = actor();

module.exports = {

  selectors: {
    caseLink: 'table tr:nth-last-child(1) a[href^="/case/DIVORCE/DIVORCE/"]',
    jurisdictionSelect: '#wb-jurisdiction',
    caseTypeSelect: '#wb-case-type',
    caseStateSelect: '#wb-case-state',
    rdcSelect: '#D8DivorceUnit',
    solicitorPaymentMethodSelect: '#SolPaymentHowToPay',
    urgentFilterYes: '#SolUrgentCase-Yes',
    urgentFilterNo: '#SolUrgentCase-No'
  },

  selectCase() {
    I.waitForElement(this.selectors.caseLink, 25);
    I.click(this.selectors.caseLink);
  },

  resetFilter() {
    I.waitForElement(this.selectors.jurisdictionSelect);
    I.waitForElement(this.selectors.caseTypeSelect);
    I.retry(2).selectOption(this.selectors.caseTypeSelect, 'Divorce case - v115.00');
    I.waitForElement(this.selectors.caseStateSelect);
    I.selectOption(this.selectors.caseStateSelect, 'Any');
    I.waitForElement(this.selectors.rdcSelect);
    I.waitForElement(this.selectors.solicitorPaymentMethodSelect);
    I.see('Create case');
    I.click('Apply');
  },

  urgentCaseFilter(urgent,caseNum) {
    I.waitForElement(this.selectors.jurisdictionSelect);
    I.waitForElement(this.selectors.caseTypeSelect);
    I.retry(2).selectOption(this.selectors.caseTypeSelect, 'Divorce case - v115.00');
    I.waitForElement(this.selectors.caseStateSelect);
    I.selectOption(this.selectors.caseStateSelect, 'Any');
    I.waitForElement(this.selectors.rdcSelect);
    I.waitForElement(this.selectors.solicitorPaymentMethodSelect);
    if (urgent === 'yes') {
      I.click(this.selectors.urgentFilterYes);
    } else {
      I.click(this.selectors.urgentFilterNo);
    }
    I.see('Create case');
    I.click('Apply');
    I.click('Last Modified');
    I.click(caseNum);
  }
};
