const { I } = inject()
const timeout = require('../common/timeout');
const apiKeyLocator = require('./locator');
const loginLocator = require('../login/locator.js');
const settingPageLocator = require('../settingPage/locator');
const MyVariable = require('../common/variable');
const customMethod = require('../../utils/customMethod');
const loginFunction = require('../login/index.js')

module.exports = {
    login() {
        loginFunction.navigateToPage(loginLocator.urlLoginPage);
        loginFunction.login(MyVariable.email, MyVariable.password);
        loginFunction.navigateToPortfolio(loginLocator.urlPortfolioPage)
    },
    openApiKeysPage() {
        customMethod.clickElement(settingPageLocator.profileNameLabel);
        customMethod.clickElement(apiKeyLocator.profileButton);
        customMethod.clickElement(apiKeyLocator.apiKeyMenuButton);
    },
    verifyShowApiKeysPage() {
        I.waitForElement(apiKeyLocator.apiKeyMenuButton, timeout.waitForElement)
    },
    createApiKey(apiName) {
        customMethod.clickElement(apiKeyLocator.createApiKeyButton);
        I.waitForElement(apiKeyLocator.apiNameField, timeout.waitForElement)
        customMethod.fieldValue(apiKeyLocator.apiNameField, apiName);
        customMethod.clickElement(apiKeyLocator.submitCreateApiButton);
    },
    afterCreateApiKey() {
        I.waitForElement(apiKeyLocator.successTitle, timeout.waitForElement)
    },
    editApiKey(newName) {
        customMethod.clickElement(apiKeyLocator.doneButton);
        I.waitForElement(apiKeyLocator.editButton, timeout.waitForElement)
        customMethod.clickElement(apiKeyLocator.editButton);
        I.waitForElement(apiKeyLocator.submitEditApiButton, timeout.waitForElement)
        customMethod.fieldValue(apiKeyLocator.apiNameField, newName);
        customMethod.clickElement(apiKeyLocator.submitEditApiButton);
    },
    afterEditApiKey(newName) {
        I.waitForElement(apiKeyLocator.updatedName, timeout.waitForElement)
        I.seeTextEquals(newName, apiKeyLocator.updatedName)
    },
    deleteApiKey() {
        customMethod.clickElement(apiKeyLocator.deleteButton);
        customMethod.clickElement(apiKeyLocator.acceptDeleteButton);
    },
    afterDeleteApiKey() {
        I.waitForElement(apiKeyLocator.alertDeleteSuccess, timeout.waitForElement)
    }

}