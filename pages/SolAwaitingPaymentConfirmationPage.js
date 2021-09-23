const I = actor();

const { signOut } = require('../common/constants');

module.exports = {

  fields: {
    email: '#username'
  },

  async checkPageAndSignOut() {
    await I.waitForText('Sign out');
    await I.click('Sign out');
    await I.waitForElement(this.fields.email, 30);
  }
};