const I = actor();
const { firstLetterToCaps, formatDateToCcdDisplayDate } = require('../helpers/utils');
const labels = require('../data/tab-fields/payments.json');


module.exports = async (verifyContent) => {
  await I.clickTab(labels.name);
  I.see(labels.onlinePaymentSection);
  I.see(labels.paymentChannel);
  I.see(firstLetterToCaps(verifyContent.Payments[0].value.PaymentChannel));
  I.see(labels.paymentTxnID);
  I.see(verifyContent.Payments[0].value.PaymentTransactionId);
  I.see(labels.paymentRef);
  I.see(verifyContent.Payments[0].value.PaymentReference);
  I.see(labels.paymentDate);
  I.see(formatDateToCcdDisplayDate(new Date(verifyContent.Payments[0].value.PaymentDate)));
  I.see(labels.paymentStatus);
  I.see(verifyContent.Payments[0].value.PaymentStatus);
  I.see(labels.paymentFeeID);
  I.see(verifyContent.Payments[0].value.PaymentFeeId);
  I.see(labels.paymentSiteID);
  I.see(verifyContent.Payments[0].value.PaymentSiteId);
  I.see(labels.unprocessedPaymentsSection);
  I.see(labels.processedPaymentsSection);
}
