const { I } = inject()
const timeout = require('../common/timeout')
const connectionPageLocator = require('./locator')
const customMethod = require("../../utils/customMethod")

module.exports = {

    addNewBank(bankname, username, password, option) {
        customMethod.clickElement(connectionPageLocator.connectionTab)
        I.waitForElement(connectionPageLocator.bankTitle, timeout.waitForElement)
        customMethod.clickElement(connectionPageLocator.bankTab)
        customMethod.clickElement(connectionPageLocator.logoBankCard(bankname))
        I.waitForElement(connectionPageLocator.cardTitle(bankname))
        customMethod.fieldValue(connectionPageLocator.usernameBank, username)
        customMethod.fieldValue(connectionPageLocator.passwordBank, password)
        customMethod.clickElement(option)
        customMethod.clickElement(connectionPageLocator.connectButton)
        I.waitForVisible(connectionPageLocator.verifiedIcon, timeout.waitForElement)
        customMethod.clickElement(connectionPageLocator.selectRowbyBankUsername(username))
        customMethod.clickElement(connectionPageLocator.addNewBankButton)
        I.see(bankname, connectionPageLocator.bankInforDiv)
        I.see(username, connectionPageLocator.bankInforDiv)
        I.see('Kết nối', connectionPageLocator.bankInforDiv)
    },
    updateBankInfor(name, newpass) {
        customMethod.fieldValue(connectionPageLocator.reminiscentName, name)
        I.pressKey('Tab')
        I.waitForVisible(connectionPageLocator.doneReminiscentNameIcon)
        customMethod.clickElement(connectionPageLocator.updatePasswordIcon)
        customMethod.fieldValue(connectionPageLocator.newPasswordField, newpass)
        customMethod.clickElement(connectionPageLocator.changePasswordButton)
        I.waitForVisible(connectionPageLocator.changePasswordSuccessToast, timeout.waitForElement)
    },
    async deleleBankCard(reminiscentname, bankSubID) {
        customMethod.clickElement(connectionPageLocator.connectionTab)
        customMethod.clickElement(connectionPageLocator.bankTab)
        customMethod.clickElement(connectionPageLocator.bankCard(reminiscentname))
        // let subid = await I.grabTextFrom(connectionPageLocator.subBankId)
        // subid = subid.trim()
        customMethod.clickElement(connectionPageLocator.deleteBankCardButton)
        customMethod.fieldValue(connectionPageLocator.confirmInputField, bankSubID)
        customMethod.clickElement(connectionPageLocator.confirmDeleteButton)
        I.waitForVisible(connectionPageLocator.bankConnectButton, timeout.waitForElement)
    }

}   