const I = actor();

const { reasonsForDivorce } = require('../common/constants');

module.exports = {

  fields: {
    d8LivedApartSinceDesertion: '#D8LivedApartSinceDesertion_Yes',
    d8LivedApartSinceSeparation:'#D8LivedApartSinceSeparation_Yes',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit(reason) {
    await I.waitInUrl('solicitorCreateSolSOCLivedApart');
    await I.runAccessibilityTest();
    if (reasonsForDivorce.DESERTION === reason) {
      await I.click(this.fields.d8LivedApartSinceDesertion);
    } else if ([reasonsForDivorce.SEPFIVEYRS, reasonsForDivorce.SEPTWOYRS].includes(reason)) {
      await I.click(this.fields.d8LivedApartSinceSeparation);
    }
    await I.waitForNavigationToComplete(this.fields.submit);
    await I.wait(1);
  }
};
