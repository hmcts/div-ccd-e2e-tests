const getTestUserLoginDetails = () => {
    if (!process.env.CCD_E2E_EMAIL || !process.env.CCD_E2E_PASSWORD) {
        throw new Error('You need to set CCD_E2E_EMAIL and CCD_E2E_PASSWORD env variables');
    }
    return { 
        username: process.env.CCD_E2E_EMAIL ,
        password: process.env.CCD_E2E_PASSWORD
    };
}

const getBaseUrl = () => {
    if (!process.env.TEST_ENV) {
        throw new Error('You need to set TEST_ENV variable e.g. www-ccd.nonprod.platform.hmcts.net');
    }
    return process.env.TEST_ENV;
}

module.exports = {
    getTestUserLoginDetails,
    getBaseUrl
};