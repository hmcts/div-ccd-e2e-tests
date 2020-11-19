const I = actor();
const { firstLetterToCaps, datechange } = require('../helpers/utils');
const labels = require('../data/tab-fields/aos.json');
const { reasonsForDivorce } = require('../common/constants')


module.exports = (reason,verifyContent) => {
  // AOS Answers
  I.click(labels.respondentTab.name);
  I.see(labels.aosAnswers.respConfirmedRead);
  I.see(verifyContent.RespConfirmReadPetition);

  if(reasonsForDivorce.ADULTERY == reason) {
    I.see(labels.aosAnswers.respDefendDivorce);
    I.see(verifyContent.RespWillDefendDivorce);
    I.see(labels.aosAnswers.respAdmitted);
    I.see(verifyContent.RespAdmitOrConsentToFact);
    I.see(labels.aosAnswers.respAgreedClaimdJurisdiction);
    I.see(verifyContent.RespJurisdictionAgree);
    I.see(labels.aosAnswers.respReasonJurisdiction);
    I.see(verifyContent.RespJurisdictionDisagreeReason);
    I.see(labels.aosAnswers.respJurisdictionCountry);
    I.see(verifyContent.RespJurisdictionRespCountryOfResidence);
    I.see(labels.aosAnswers.resplegalProceedings);
    I.see(verifyContent.RespLegalProceedingsExist);
    I.see(labels.aosAnswers.respDigitalChannel);
    I.see(firstLetterToCaps(verifyContent.RespContactMethodIsDigital));
    I.see(labels.general.yes);
    I.see(labels.aosAnswers.respDueDate);
  }
  if(reasonsForDivorce.BEHAVIOUR == reason) {
    I.see(labels.aosAnswers.respConfirmedRead);
    I.see(verifyContent.RespConfirmReadPetition);
    I.see(labels.aosAnswers.respAdmitted);
    I.see(verifyContent.RespAdmitOrConsentToFact);
    I.see(labels.aosAnswers.respAgreedClaimdJurisdiction);
    I.see(verifyContent.RespJurisdictionAgree);
    I.see(labels.aosAnswers.resplegalProceedings);
    I.see(verifyContent.RespLegalProceedingsExist);
    I.see(labels.aosAnswers.respAgreeCosts);
    I.see(verifyContent.RespAgreeToCosts);
    I.see(labels.aosAnswers.respDigitalChannel);
    I.see(firstLetterToCaps(verifyContent.RespContactMethodIsDigital));
    I.see(labels.general.yes);
    I.see(labels.aosAnswers.respDueDate);
  }
  I.see(datechange(30));
}
