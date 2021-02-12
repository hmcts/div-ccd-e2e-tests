const I = actor();
const { firstLetterToCaps, datechange } = require('../helpers/utils');
const labels = require('../data/tab-fields/aos.json');
const commonFields = require('../data/tab-fields/commonFields.json');
const { reasonsForDivorce } = require('../common/constants');


module.exports = async (reason,verifyContent) => {
  // AOS Answers
  await I.clickTab(labels.name);
  await I.see(labels.respConfirmedRead);
  await I.see(verifyContent.RespConfirmReadPetition);
  await I.see(labels.respAdmitted);
  await I.see(verifyContent.RespAdmitOrConsentToFact);
  await I.see(labels.respAgreedClaimdJurisdiction);
  await I.see(verifyContent.RespJurisdictionAgree);
  await I.see(labels.resplegalProceedings);
  await I.see(verifyContent.RespLegalProceedingsExist);
  await I.see(labels.respDigitalChannel);
  await I.see(firstLetterToCaps(verifyContent.RespContactMethodIsDigital));
  await I.see(labels.aosLetterHolderID);

  if(reasonsForDivorce.ADULTERYDISPLAY === reason) {
    await I.see(labels.respDefendDivorce);
    await I.see(verifyContent.RespWillDefendDivorce);
    await I.see(labels.respReasonJurisdiction);
    await I.see(verifyContent.RespJurisdictionDisagreeReason);
    await I.see(labels.respJurisdictionCountry);
    await I.see(verifyContent.RespJurisdictionRespCountryOfResidence);
  }
  if(reasonsForDivorce.BEHAVIOURDISPLAY === reason) {
    await I.see(labels.respAgreeCosts);
    await I.see(verifyContent.RespAgreeToCosts);
  }
  await I.see(labels.respDueDate);
  await I.see(datechange(30));
};
