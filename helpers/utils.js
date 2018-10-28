const getSolicitorLoginDetails = () => {
    if (!process.env.CCD_E2E_EMAIL || !process.env.CCD_E2E_PASSWORD) {
        throw new Error('You need to set CCD_E2E_EMAIL and CCD_E2E_PASSWORD env variables');
    }
    return {
        username: 'michael.osinloye@hmcts.net' ,
        password: process.env.CCD_E2E_PASSWORD
    };
}

const getCaseWorkerLoginDetails = () => {
    if (!process.env.CCD_CW_EMAIL || !process.env.CCD_CW_PASSWORD) {
        throw new Error('You need to set CCD_CW_EMAIL and CCD_CW_PASSWORD env variables');
    }
    return { 
        username: process.env.CCD_CW_EMAIL ,
        password: process.env.CCD_CW_PASSWORD
    };
}

const getBaseUrl = () => {
    return 'www-ccd.nonprod.platform.hmcts.net';
}

module.exports = {
    getSolicitorLoginDetails,
    getCaseWorkerLoginDetails,
    getBaseUrl
};