const I = actor();

module.exports = {

  fields: {
    signOut: '#sign-out',
  },

  fillFormAndSubmit() {
    I.wait(10);
    // I.see('	Michael OSINLOYE');
    // I.see('Check your answers');
    // I.see('End state');
    // I.see('Solicitor - Awaiting Payment Confirmation');
    // I.wait(5);
    I.click('Sign Out');
  }
}