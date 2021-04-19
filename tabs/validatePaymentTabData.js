const I = actor();
const { firstLetterToCaps, formatDateToCcdDisplayDate } = require('../helpers/utils');
const labels = require('../data/tab-fields/payments.json');


module.exports = async (verifyContent) => {
  await I.clickTab(labels.name);
  await I.see(labels.onlinePaymentSection);
  await I.see(labels.paymentChannel);
  await I.see(firstLetterToCaps(verifyContent.Payments[0].value.PaymentChannel));
  await I.see(labels.paymentTxnID);
  await I.see(verifyContent.Payments[0].value.PaymentTransactionId);
  await I.see(labels.paymentRef);
  await I.see(verifyContent.Payments[0].value.PaymentReference);
  await I.see(labels.paymentDate);
  await I.see(formatDateToCcdDisplayDate(new Date(verifyContent.Payments[0].value.PaymentDate)));
  await I.see(labels.paymentStatus);
  await I.see(verifyContent.Payments[0].value.PaymentStatus);
  await I.see(labels.paymentFeeID);
  await I.see(verifyContent.Payments[0].value.PaymentFeeId);
  await I.see(labels.paymentSiteID);
  await I.see(verifyContent.Payments[0].value.PaymentSiteId);
  // await I.see(labels.unprocessedPaymentsSection);
  // await I.see(labels.processedPaymentsSection);
};
