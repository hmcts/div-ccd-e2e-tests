const I = actor();

const { signOut } = require('../common/constants');

module.exports = {

  fields: {
    email: '#username',
    password: '#password',
    submit: 'input[type="submit"]'
  },

  async checkPageAndSignOut() {
    await I.wait(1);
    await I.click(signOut);
    await I.waitForElement(this.fields.email, 30);
  }
};