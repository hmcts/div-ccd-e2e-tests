const I = actor();

module.exports = {

  fields: {
    solicitorRepresented: '#respondentSolicitorRepresented-No',
    respondentHomeAddress: '#D8DerivedRespondentHomeAddress',
    respondentServiceAddress:'#D8DerivedRespondentCorrespondenceAddr',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitInUrl('solicitorCreateRespondentServiceDetails');
    await I.runAccessibilityTest();
    await I.click(this.fields.solicitorRepresented);
    await I.fillField(this.fields.respondentHomeAddress, '300 Central London, Lagos W2 3MU');
    await I.fillField(this.fields.respondentServiceAddress, '007 Peter Pan Road , E14 5RT');
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};