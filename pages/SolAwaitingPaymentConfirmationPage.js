const I = actor();

const { signOut } = require('../common/constants');

module.exports = {
  async checkPageAndSignOut() {
    await I.wait(1);
    await I.click(signOut);
  }
};