const I = actor();

const { reasonsForDivorce } = require('../common/constants');

module.exports = {

  fields: {
    fact: '#D8ReasonForDivorce',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit(reason) {
    await I.waitInUrl('solicitorCreateSolReasonForDivorce');
    await I.runAccessibilityTest();
    if (reason === reasonsForDivorce.ADULTERY) {
      await I.selectOption(this.fields.fact, reasonsForDivorce.ADULTERYDISPLAY);
    } else if (reason === reasonsForDivorce.BEHAVIOUR) {
      await I.selectOption(this.fields.fact, reasonsForDivorce.BEHAVIOURDISPLAY);
    } else if (reason === reasonsForDivorce.DESERTION) {
      await I.selectOption(this.fields.fact, reasonsForDivorce.DESERTIONDISPLAY);
    } else if (reason === reasonsForDivorce.SEPTWOYRS) {
      await I.selectOption(this.fields.fact, reasonsForDivorce.SEPTWOYRSDISPLAY);
    } else if (reason === reasonsForDivorce.SEPFIVEYRS) {
      await I.selectOption(this.fields.fact, reasonsForDivorce.SEPFIVEYRSDISPLAY);
    }
    await I.waitForNavigationToComplete(this.fields.submit);
  }
};