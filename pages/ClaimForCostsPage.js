const I = actor();

module.exports = {

  fields: {
    petitionerWantsToClaimCosts: '#D8DivorceCostsClaim-No',
    submit: 'button[type="submit"]'
  },

  fillFormAndSubmit() {
    I.seeInCurrentUrl('solicitorCreateSolApplyToClaimCosts');
    I.click(this.fields.petitionerWantsToClaimCosts);
    I.click(this.fields.submit);
    I.wait(1);
  }
};