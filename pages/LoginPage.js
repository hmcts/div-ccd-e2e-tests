const I = actor();

module.exports = {

  fields: {
    email: '#username',
    password: '#password',
    submit: 'input[type="submit"]'
  },

  async submitLogin(email, password) {
    await I.waitForNavigation({ waitUntil: this.fields.email });
    await I.fillField(this.fields.email, email);
    await I.fillField(this.fields.password, password);
    await I.waitForNavigationToComplete(this.fields.submit);
  }
};