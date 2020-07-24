const data = require('../fixtures/user')
const el = require('../fixtures/elements')

module.exports = {
    before: browser => {
        browser
        .url(browser.launch_url)
    },

    'Assert elements on login page': browser => {
        browser
        .waitForElementVisible('body')
        .assert.elementPresent(el.loginPage.acmepic)
        .assert.elementPresent(el.loginPage.userInput)
        .assert.elementPresent(el.loginPage.passwordInput)
    },

    'Login with valid credentials' : function(browser) {
        browser
        .setValue(el.loginPage.userInput, data.user.valid.username)
        .setValue(el.loginPage.passwordInput, data.user.valid.password)
        .useXpath()
        .click(el.loginPage.submit)
        .assert.urlContains('/dashboard')
    },

    'Verify user logout': function(browser){
        browser
        .click(el.homePage.signOut)
        .click(el.homePage.signOutConfirm)
    },

    after: function(browser){
        browser.end();
    }

}