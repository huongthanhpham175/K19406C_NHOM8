const { I } = inject()
const loginFunction = require('../page/login/index.js')
const loginLocator = require('../page/login/locator.js')
const MyVariable = require('../page/common/variable')

Given('User navigate to Casso login page', () => {
  loginFunction.navigateToPage(loginLocator.urlLoginPage)
})

When('Input User name and password and click on login button', () => {
  loginFunction.login(MyVariable.email, MyVariable.password)
});

Then('User is able to login to the Casso page successfully', () => {
  loginFunction.navigateToPortfolio(loginLocator.urlPortfolioPage)
});

