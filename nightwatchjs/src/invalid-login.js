const data = require('../fixtures/user')
const el = require('../fixtures/elements')

module.exports = {
    before: function (browser) {
        browser
            .url(browser.launch_url)
    },

    'Assert elements on login page': function (browser) {
        browser
            .waitForElementVisible('body')
            .assert.elementPresent(el.loginPage.acmepic)
            .assert.elementPresent(el.loginPage.userInput)
            .assert.elementPresent(el.loginPage.passwordInput)
    },

    'Login with invalid user credentials': function (browser) {
        browser
            .setValue(el.loginPage.userInput, data.user.invalid.username)
            .setValue(el.loginPage.passwordInput, data.user.invalid.password)
            .click(el.loginPage.submit)
            .assert.elementPresent(el.loginPage.loginFailed)
        },

    after: function (browser) {
        browser.end();
    }

}