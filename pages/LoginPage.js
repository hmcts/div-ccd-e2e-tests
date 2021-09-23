const I = actor();

module.exports = {

  fields: {
    email: '#username',
    password: '#password',
    submit: 'input[type="submit"]',
    signIn: 'Sign in'
  },

  async submitLogin(email, password) {
    await I.waitForText(this.fields.signIn);
    await I.fillField(this.fields.email, email);
    await I.fillField(this.fields.password, password);
    await I.waitForNavigationToComplete(this.fields.submit);
  }
};