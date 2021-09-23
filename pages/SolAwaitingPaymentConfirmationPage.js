const I = actor();

const { signOut } = require('../common/constants');

module.exports = {

  fields: {
    email: '#username'
  },

  async checkPageAndSignOut() {
    await I.waitForText(signOut);
    await I.click(signOut);
    await I.waitForElement(this.fields.email, 30);
  }
};