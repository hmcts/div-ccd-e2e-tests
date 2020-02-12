const I = actor();

module.exports = {

  fields: {
    signOut: '#sign-out'
  },

  checkPageAndSignOut() {
    I.wait(2);
    I.click('Sign Out');
  }
};