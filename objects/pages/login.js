const { driver } = require("../../utils/android");

module.exports = {
    loginPageLoaded: async () => {
        await driver.setImplicitWaitTimeout(30000);

        return driver.waitForElementById("login_button");
    },

    versionIsDisplayed: () => {
        return driver.elementById("version_text_view").isDisplayed();
    },

    getVersionText: async (versionTextRequested = null) => {
        // version text format is like "0.12.44 - 8718"
        const version = await driver.elementById("version_text_view").text();

        // return text before the " - " or after depending on the param. default is whole string
        return (
            {
                appVersion: version.split(" - ")[0],
                storeNumber: version.split(" - ")[1],
            }[versionTextRequested] ?? version
        );
    },

    tapLoginButton: () => {
        return driver.elementById("login_button").click();
    },

    enterUsername: (userid = "555") => {
        return driver.elementById("enter_user_id_edit_text").type(userid);
    },

    enterPassword: (pass = "1234") => {
        return driver.elementById("enter_password_edit_text").type(pass);
    },
};
