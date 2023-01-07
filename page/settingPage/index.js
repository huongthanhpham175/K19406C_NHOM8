const { I } = inject()
const timeout = require('../common/timeout')
const settingPageLocator = require('./locator')
const customMethod = require("../../utils/customMethod")
const createNewCompanyLocator = require('../createNewCompany/locator')

module.exports = {
    viewCreationPage() {
        customMethod.clickElement(settingPageLocator.profileNameLabel)
        customMethod.clickElement(settingPageLocator.changeCompanyButton)
        customMethod.clickElement(settingPageLocator.addNewButton)
        I.waitForElement(createNewCompanyLocator.titleText, timeout.waitForElement)
    },
    editCompany(fullname) {
        customMethod.clickElement(settingPageLocator.menuIcon)
        customMethod.clickElement(settingPageLocator.settingTab)
        I.waitForElement(settingPageLocator.profileTitle, timeout.waitForElement)
        customMethod.fieldValue(settingPageLocator.fullNamefield, fullname)
        I.pressKey('Tab')
        I.waitForElement(settingPageLocator.doneIcon, timeout.waitForElement)
        I.attachFile(settingPageLocator.uploadFileButton, '/data/image1.png')
        I.waitForVisible(settingPageLocator.imageCropper, timeout.waitForElement)
        customMethod.clickElement(settingPageLocator.saveImageButton)
        I.waitForVisible(settingPageLocator.profileImage, timeout.waitForElement)
    },
    addNewMember(membername) {
        customMethod.clickElement(settingPageLocator.memberTab)
        I.waitForElement(settingPageLocator.memberListTitle)
        customMethod.clickElement(settingPageLocator.addNewMemberButton)
        customMethod.fieldValue(settingPageLocator.emailField, membername)
        customMethod.clickElement(settingPageLocator.searchMemberButton)
        customMethod.clickElement(settingPageLocator.inviteMemberButton)
        I.see(membername, settingPageLocator.memberLastRow)
        I.see('Đang chờ phải hồi', settingPageLocator.memberLastRow)
        I.see('Member', settingPageLocator.memberLastRow)
    },
    deleteMember(membername) {
        customMethod.clickElement(settingPageLocator.deleteButtonbyMemberName(membername))
        customMethod.clickElement(settingPageLocator.acceptDeleteButton)
        I.waitForInvisible(settingPageLocator.deleteButtonbyMemberName(membername))
    },
    deleteCompany(companyname) {
        customMethod.clickElement(settingPageLocator.settingTab)
        customMethod.clickElement(settingPageLocator.anotherSettingTab)
        I.waitForElement(settingPageLocator.anotherSettingTitle, timeout.waitForElement)
        customMethod.clickElement(settingPageLocator.deleteCompanyDiv)
        customMethod.clickElement(settingPageLocator.deleteCompanyButton)
        customMethod.fieldValue(settingPageLocator.confirmInputField, companyname)
        customMethod.clickElement(settingPageLocator.confirmDeleteCompany)
        I.waitForElement(settingPageLocator.companyListTitle, timeout.waitForElement)
        customMethod.clickElement(settingPageLocator.companyFirst)
    }

}   