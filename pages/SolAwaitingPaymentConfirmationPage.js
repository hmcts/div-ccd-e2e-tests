const I = actor();

const { signOut } = require('../common/constants');

module.exports = {
  checkPageAndSignOut() {
    I.wait(2);
    I.click(signOut);
  }
};