const { I } = inject()
const timeout = require('../common/timeout');
const createNewCompanyLocator = require('./locator')
const settingPageLocator = require('../settingPage/locator')
const customMethod = require('../../utils/customMethod');

module.exports = {
    clickCreateNewCompany() {
        customMethod.clickElement(createNewCompanyLocator.createCompanyButton);
    },
    viewCreateFrom() {
        I.waitForElement(createNewCompanyLocator.titleText, timeout.waitForElement)
    },
    createNewCompany(website, companyname, option) {
        customMethod.fieldValue(createNewCompanyLocator.websiteField, website);
        customMethod.fieldValue(createNewCompanyLocator.companyNameField, companyname);
        customMethod.clickElement(option);
        customMethod.clickElement(createNewCompanyLocator.submitCreateCompanyButton)
    },
    checkProfileName(companyname) {
        I.waitForElement(settingPageLocator.profileNameLabel, timeout.waitForElement)
        I.seeTextEquals(companyname, settingPageLocator.profileNameLabel)
    }

}