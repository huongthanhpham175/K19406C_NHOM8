const { I } = inject()
const createNewCompanyFunction = require('../page/createNewCompany/index.js')
const createNewCompanyLocator = require('../page/createNewCompany/locator.js')
const Myfunctions = require('../page/common/functions');
const MyVariable = require('../page/common/variable.js');

When('User click on create new company button', () => {
    createNewCompanyFunction.clickCreateNewCompany()
});
Then('Verify open create company form', () => {
    createNewCompanyFunction.viewCreateFrom()
});
When('Input website and company name, select random option and click submit', () => {
    createNewCompanyFunction.createNewCompany(MyVariable.website, MyVariable.companyName, createNewCompanyLocator.optionsRadio + '[' + Myfunctions.randomNumber(1, 6) + ']')
});
Then('Verify create company successfully', () => {
    createNewCompanyFunction.checkProfileName(MyVariable.companyName);
})

