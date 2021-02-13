'use strict';

const Helper = codecept_helper;
const helperName = 'Puppeteer';
const testConfig = require('../tests/config');

const {runAccessibility} = require('./accessibility/runner');

class PuppeteerHelper extends Helper {

  async clickTab(tabTitle) {
    const page = this.helpers[helperName].page;
    const tabXPath = `//div[text()='${tabTitle}']`;
    const tabExists = await page.waitForXPath(tabXPath, {timeout: 6000}) ? true : false;
    if (tabExists) {
      const clickableTab = await page.$x(tabXPath);
      await page.evaluate(el => {return el.click();}, clickableTab[0]);
    }
  }


  async isSafariBrowser() {
    await Promise.resolve(() => {
      return false;
    });
  }

  async isMicrosoftEdgeOrSafariBrowser() {
    await Promise.resolve(() => {
      return false;
    });
  }

  async waitForNavigationToComplete(locator) {
    const page = this.helpers[helperName].page;
    await page.waitForSelector(locator, {visible: true});
    await page.click(locator);
  }

  async runAccessibilityTest() {
    if (!testConfig.TestForAccessibility) {
      return;
    }
    const url = await this.helpers[helperName].grabCurrentUrl();
    const {page} = await this.helpers[helperName];

    await runAccessibility(url, page);
  }
}
module.exports = PuppeteerHelper;
