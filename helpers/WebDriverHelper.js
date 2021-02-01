'use strict';

const Helper = codecept_helper;
const testConfig = require('../tests/config');

class WebDriverHelper extends Helper {
  async runAccessibilityTest() {
    //Ignore this for web driver
    await Promise.resolve();
  }

  async clickTab(tabTitle) {
    const helper = this.helpers.WebDriver;
    const tabXPath = `//div[text()='${tabTitle}']`;
    const elements = await helper._locateClickable(tabXPath);
    const selector = elements[0].selector;

    helper.executeScript(function (el) {
      (
        function(expression, parentElement) {
          const r = [];
          const x = document.evaluate(expression, parentElement ||
                      document, null, XPathResult.ORDERED_NODE_SNAPSHOT_TYPE, null);
          for (let i = 0, l = x.snapshotLength; i < l; i++) {
            r.push(x.snapshotItem(i));
          }
          return r;
        }
      )(el)[0].click();
    }, selector);
  }
}

module.exports = WebDriverHelper;
