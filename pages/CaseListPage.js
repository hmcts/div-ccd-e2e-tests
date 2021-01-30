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

  async selectCase() {
    await I.waitForElement(this.selectors.caseLink, 25);
    await I.click(this.selectors.caseLink);
  },

  async resetFilter() {
    await I.waitForElement(this.selectors.jurisdictionSelect);
    await I.waitForElement(this.selectors.caseTypeSelect);
    await I.retry(2).selectOption(this.selectors.caseTypeSelect, 'Divorce case - v115.00');
    await I.waitForElement(this.selectors.caseStateSelect);
    await I.selectOption(this.selectors.caseStateSelect, 'Any');
    await I.waitForElement(this.selectors.rdcSelect);
    await I.waitForElement(this.selectors.solicitorPaymentMethodSelect);
    await I.see('Create case');
    await I.click('Apply');
  },

  async urgentCaseFilter(urgent,caseNum) {
    await I.waitForElement(this.selectors.jurisdictionSelect);
    await I.waitForElement(this.selectors.caseTypeSelect);
    await I.retry(2).selectOption(this.selectors.caseTypeSelect, 'Divorce case - v115.00');
    await I.waitForElement(this.selectors.caseStateSelect);
    await I.selectOption(this.selectors.caseStateSelect, 'Any');
    await I.waitForElement(this.selectors.rdcSelect);
    await I.waitForElement(this.selectors.solicitorPaymentMethodSelect);
    if (urgent === 'yes') {
      await I.click(this.selectors.urgentFilterYes);
    } else {
      await I.click(this.selectors.urgentFilterNo);
    }
    await I.see('Create case');
    await I.click('Apply');
    await I.click('Last Modified');
    await I.click(caseNum);
  }
};
