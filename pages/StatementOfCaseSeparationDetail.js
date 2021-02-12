const I = actor();

module.exports = {

  fields: {
    d8MentalSepDay: '#D8MentalSeparationDate-day',
    d8MentalSepMonth: '#D8MentalSeparationDate-month',
    d8MentalSepYr: '#D8MentalSeparationDate-year',
    d8PhysicalSeparationDay: '#D8PhysicalSeparationDate-day',
    d8PhysicalSeparationMonth: '#D8PhysicalSeparationDate-month',
    d8PhysicalSeparationYr: '#D8PhysicalSeparationDate-year',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.waitInUrl('solicitorCreateSolSOCSeparation');
    await I.runAccessibilityTest();
    await I.fillField(this.fields.d8MentalSepDay, '11');
    await I.fillField(this.fields.d8MentalSepMonth, '12');
    await I.fillField(this.fields.d8MentalSepYr, '2000');

    await I.fillField(this.fields.d8PhysicalSeparationDay, '11');
    await I.fillField(this.fields.d8PhysicalSeparationMonth, '12');
    await I.fillField(this.fields.d8PhysicalSeparationYr, '2013');

    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};