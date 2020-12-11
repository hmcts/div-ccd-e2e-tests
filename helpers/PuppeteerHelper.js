'use strict';

const Helper = codecept_helper;
const helperName = 'Puppeteer';

class PuppeteerHelper extends Helper {

    async clickTab(tabTitle) {
        const page = this.helpers[helperName].page;
        const tabXPath = `//div[text()='${tabTitle}']`;
        const clickableTab = await page.$x(tabXPath);
        await clickableTab[0].click();
    }
}
module.exports = PuppeteerHelper;
