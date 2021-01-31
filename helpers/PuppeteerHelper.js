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
            await page.evaluate(el => el.click(), clickableTab[0]);
        }
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
