const I = actor();

module.exports = {

  fields: {
    petitionerWantsToClaimCosts: '#D8DivorceCostsClaim-No',
    submit: 'button[type="submit"]'
  },

  async fillFormAndSubmit() {
    await I.seeInCurrentUrl('solicitorCreateSolApplyToClaimCosts');
    await I.click(this.fields.petitionerWantsToClaimCosts);
    await I.click(this.fields.submit);
    await I.wait(1);
  }
};