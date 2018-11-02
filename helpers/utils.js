const request = require('request-promise-native');

const getSolicitorLoginDetails = () => {
    if (!process.env.CCD_E2E_PASSWORD) {
        throw new Error('You need to set CCD_E2E_EMAIL and CCD_E2E_PASSWORD env variables');
    }
    return {
        username: process.env.CCD_E2E_EMAIL,
        password: process.env.CCD_E2E_PASSWORD
    };
}

async function createCaseInCcd () {
    // Setup Details
    const username = process.env.CCD_E2E_EMAIL;
    const password = process.env.CCD_E2E_PASSWORD;
    const redirectUri = 'https://div-pfe-aat.service.core-compute-aat.internal/authenticated';
    const idamClientSecret = process.env.IDAM_CLIENT_SECRET;
    const serviceSecret = process.env.SERVICE_SECRET;

    const idamBaseUrl = 'https://preprod-idamapi.reform.hmcts.net:3511';

    const idamCodePath = `/oauth2/authorize?response_type=code&client_id=divorce&redirect_uri=${redirectUri}`;

    const codeResponse = await request.post({
      uri: idamBaseUrl + idamCodePath,
      headers: {
        Authorization: 'Basic ' + Buffer.from(`${username}:${password}`).toString('base64'),
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });
    const code = JSON.parse(codeResponse).code;

    const idamAuthPath = `/oauth2/token?grant_type=authorization_code&client_id=divorce&client_secret=${idamClientSecret}&redirect_uri=${redirectUri}&code=${code}`;
    const authTokenResponse = await request.post({
      uri: idamBaseUrl + idamAuthPath,
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    });

    const authToken = JSON.parse(authTokenResponse)['access_token'];

    const idamDetailsPath = '/details';
    const userDetails = await request.get({
      uri: idamBaseUrl + idamDetailsPath,
      headers: {
        Authorization: `Bearer ${authToken}`
      }
    });

    const userId = JSON.parse(userDetails).id;

    const s2sBaseUrl = 'http://rpe-service-auth-provider-aat.service.core-compute-aat.internal';
    const s2sAuthPath = '/lease';
    const oneTimePassword = require('otp')({
      secret: serviceSecret
    }).totp();

    const serviceToken = await request({
      method: 'POST',
      uri: s2sBaseUrl + s2sAuthPath,
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        microservice: 'divorce_ccd_submission',
        oneTimePassword
      })
    });

    const ccdApiUrl = 'http://ccd-data-store-api-aat.service.core-compute-aat.internal';
    const ccdStartCasePath = `/caseworkers/${userId}/jurisdictions/DIVORCE/case-types/DIVORCE/event-triggers/hwfCreate/token`;
    const ccdSaveCasePath = `/caseworkers/${userId}/jurisdictions/DIVORCE/case-types/DIVORCE/cases`;

    const startCaseOptions = {
      method: 'GET',
      uri: ccdApiUrl + ccdStartCasePath,
      headers: {
        'Authorization': `Bearer ${authToken}`,
        'ServiceAuthorization': `Bearer ${serviceToken}`,
        'Content-Type': 'application/json'
      }
    };

    const startCaseResponse = await request.get(startCaseOptions);

    console.log("Should get case response");
    console.log(startCaseResponse);
}

const getBaseUrl = () => {
    return 'www-ccd.nonprod.platform.hmcts.net';
}

module.exports = {
    getSolicitorLoginDetails,
    createCaseInCcd,
    getBaseUrl
};