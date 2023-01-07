const { I } = inject()
const apiKeyFunction = require('../page/apiKey/index.js')
const MyVariable = require('../page/common/variable')

Given('User login successfully', () => {
    apiKeyFunction.login()
})

When('User open api keys page', () => {
    apiKeyFunction.openApiKeysPage()
});

Then('Verify show api keys page', () => {
    apiKeyFunction.verifyShowApiKeysPage()
});

When('Create api key', () => {
    apiKeyFunction.createApiKey(MyVariable.apiKey)
});

Then('Verify create api successfully', () => {
    apiKeyFunction.afterCreateApiKey()
});
When('Edit api key', () => {
    apiKeyFunction.editApiKey(MyVariable.newApiKey)
});
Then('Verify edit api successfully', () => {
    apiKeyFunction.afterEditApiKey(MyVariable.newApiKey)
});
When('Delete api key', () => {
    apiKeyFunction.deleteApiKey()
});
Then('Verify delete api successfully', () => {
    apiKeyFunction.afterDeleteApiKey()
});