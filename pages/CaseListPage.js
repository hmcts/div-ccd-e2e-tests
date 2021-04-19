const {yesorno} = require('../common/constants');
const I = actor();

module.exports = {

  selectors: {
    caseLink: 'table tr:nth-last-child(1) a[href^="/cases/case-details/"]',
    jurisdictionSelect: '#wb-jurisdiction',
    caseTypeSelect: '#wb-case-type',
    caseStateSelect: '#wb-case-state',
    rdcSelect: '#D8DivorceUnit',
    solicitorPaymentMethodSelect: '#SolPaymentHowToPay',
    urgentFilterYes: '#SolUrgentCase-Yes',
    urgentFilterNo: '#SolUrgentCase-No'
  },

  async clickCreateList() {
    await I.waitForText('Case List');
    await I.click('Case List');
  },

  async selectCase() {
    await I.waitForElement(this.selectors.caseLink, 25);
    await I.click(this.selectors.caseLink);
  },

  async resetFilter() {
    await I.waitForElement(this.selectors.jurisdictionSelect);
    await I.retry(5).selectOption(this.selectors.jurisdictionSelect, 'Family Divorce');
    await I.waitForElement(this.selectors.caseTypeSelect);
    await I.retry(5).selectOption(this.selectors.caseTypeSelect, 'Divorce case - v115.00');
    await I.waitForElement(this.selectors.caseStateSelect);
    await I.selectOption(this.selectors.caseStateSelect, 'Any');
    await I.waitForElement(this.selectors.rdcSelect);
    await I.waitForElement(this.selectors.solicitorPaymentMethodSelect);
    await I.see('Create case');
    await I.click('Apply');
  },

  async urgentCaseFilter(urgent, state = 'Any', caseNum) {
    await I.waitForElement(this.selectors.jurisdictionSelect);
    await I.retry(5).selectOption(this.selectors.jurisdictionSelect, 'Family Divorce');
    await I.waitForElement(this.selectors.caseTypeSelect);
    await I.retry(5).selectOption(this.selectors.caseTypeSelect, 'Divorce case - v115.00');
    await I.waitForElement(this.selectors.caseStateSelect);
    await I.selectOption(this.selectors.caseStateSelect, state);
    await I.waitForElement(this.selectors.rdcSelect);
    await I.waitForElement(this.selectors.solicitorPaymentMethodSelect);
    if (urgent === yesorno.Yes) {
      await I.click(this.selectors.urgentFilterYes);
    } else {
      await I.click(this.selectors.urgentFilterNo);
    }
    await I.see('Create case');
    await I.click('Apply');
    await I.waitForText('Last Modified');
    await I.click('Last Modified');
    await I.waitForText(caseNum);
    await I.click(caseNum);
  }
};
