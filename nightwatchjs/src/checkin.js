const data = require('../fixtures/user')
const el = require('../fixtures/elements')


module.exports = {
    before: function (browser) {
        browser
            .url(browser.launch_url)
    },

    'Login with valid credentials': function (browser) {
        browser
            .setValue(el.loginPage.userInput, data.user.valid.username)
            .setValue(el.loginPage.passwordInput, data.user.valid.password)
            .useXpath()
            .click(el.loginPage.submit)
    },

    'Employee check in details': function (browser) {
        browser
            .waitForElementVisible(el.homePage.checkinYes, 6000)
            .click(el.homePage.checkinYes)
            .assert.containsText(el.homePage.header, 'Apricity@Work')

            //Questionaire Page: Question1
            .waitForElementVisible(el.questionOne.text, 8000)
            .assert.containsText(el.questionOne.text, 'COVID-19 Diagnostic Test')
        browser
            .click(el.questionOne.radioYes)
            .expect.element(el.questionOne.submit).to.be.enabled;
        browser
            .click(el.questionOne.submit)

            //Questionaire Page: Question2
            .waitForElementVisible(el.questionTwo.text, 5000)
            .assert.containsText(el.questionTwo.text, 'Please enter the date of the test')
            .waitForElementVisible(el.questionTwo.date, 1000)
            .expect.element(el.questionTwo.submit).to.not.be.enabled;
        browser
            .setValue(el.questionTwo.date, '07232020')
            .expect.element(el.questionTwo.submit).to.be.enabled;
        browser.click(el.questionTwo.submit)

            //Questionaire Page: Question3
            browser
            .waitForElementVisible(el.questionThree.text, 5000)
            .assert.containsText(el.questionThree.text, 'What type of sample')
            .click(el.questionThree.radioYes)
            .click(el.questionThree.submit)

            //Sign out confirm
            .click(el.homePage.signOut)
            .click(el.homePage.signOutConfirm)
            
    },

    after: function (browser) {
        browser.end();
    }

}