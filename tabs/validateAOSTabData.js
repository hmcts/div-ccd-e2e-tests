const I = actor();
const { firstLetterToCaps, datechange } = require('../helpers/utils');
const labels = require('../data/tab-fields/aos.json');
const commonFields = require('../data/tab-fields/commonFields.json');
const { reasonsForDivorce } = require('../common/constants');


module.exports = (reason,verifyContent) => {
  // AOS Answers
  I.click(labels.name);
  I.see(labels.respConfirmedRead);
  I.see(verifyContent.RespConfirmReadPetition);
  I.see(labels.respDefendDivorce);
  I.see(verifyContent.RespWillDefendDivorce);
  I.see(labels.respAdmitted);
  I.see(verifyContent.RespAdmitOrConsentToFact);
  I.see(labels.respAgreedClaimdJurisdiction);
  I.see(verifyContent.RespJurisdictionAgree);
  I.see(labels.resplegalProceedings);
  I.see(verifyContent.RespLegalProceedingsExist);
  I.see(labels.respDigitalChannel);
  I.see(firstLetterToCaps(verifyContent.RespContactMethodIsDigital));
  I.see(labels.aosLetterHolderID);
  I.see(verifyContent.AosLetterHolderId);

  if(reasonsForDivorce.ADULTERY == reason) {
    I.see(labels.respReasonJurisdiction);
    I.see(verifyContent.RespJurisdictionDisagreeReason);
    I.see(labels.respJurisdictionCountry);
    I.see(verifyContent.RespJurisdictionRespCountryOfResidence);
    I.see(commonFields.yes);
    I.see(labels.respDueDate);
  }
  if(reasonsForDivorce.BEHAVIOUR == reason) {
    I.see(labels.respAgreeCosts);
    I.see(verifyContent.RespAgreeToCosts);
    I.see(commonFields.yes);
    I.see(labels.respDueDate);
  }
  I.see(datechange(30));
}
