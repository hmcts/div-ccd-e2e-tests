const testConfig = require('../tests/config');
const { demoVariables, aatVariables } = require('../common/constants');

const I = actor();

const { paymentType } = require('../common/constants');

module.exports = {

  fields: {
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit(paymentMethod) {
    const variables = paymentMethod === paymentType.FEE_ACCOUNT && testConfig.TestEnv === 'demo'? demoVariables: aatVariables;
    await I.waitInUrl(variables.solicitorStatementOfTruthPaySubmitUrl);
    await I.waitForText('Case submission');
    await I.runAccessibilityTest();
    if (paymentMethod === paymentType.FEE_ACCOUNT) {	
      await I.see('Your fee account reference: Next case submitted');	
    } else if (paymentMethod === paymentType.HWF) {	
      await I.see('Help with fee reference: HWF-123-456');	
    }
    await I.wait(1);
    await I.waitForNavigationToComplete(this.fields.submit);
  }
};