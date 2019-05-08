const I = actor();

module.exports = {

  fields: {
    signOut: '#sign-out'
  },

  checkPageAndSignOut() {
    I.wait(10);
    I.click('Sign Out');
  }
};