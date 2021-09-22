const I = actor();

const { signOut } = require('../common/constants');

module.exports = {

  fields: {
    email: '#username',
    password: '#password',
    submit: 'input[type="submit"]'
  },

  async checkPageAndSignOut() {
    await I.waitForText('Sign out');
    await I.click('Sign out');
    await I.waitForElement(this.fields.email, 30);
  }
};