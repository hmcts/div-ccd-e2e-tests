const I = actor();

module.exports = {

  fields: {
    email: '#username',
    password: '#password',
    submit: 'input[type="submit"]'
  },

  submitLogin(email, password) {
    I.fillField(this.fields.email, email);
    I.fillField(this.fields.password, password);
    I.click(this.fields.submit);
  }
}