const { Given } = require("@cucumber/cucumber");
const { driver } = require("../../utils/android");

Given(/^I sleep for (\d+) seconds/u, { timeout: -1 }, function (int) {
    return new Promise((resolve) => setTimeout(resolve, int * 1000));
});

Given("the text {string} should be displayed", function (text) {
    return driver.element(
        "-android uiautomator",
        `new UiSelector().text("${text}")`
    );
});

Given("the user clicks on the pop-up dialog", function () {
    return driver.waitForElementById("button_one_constraint_layout").click();
});

Given("hide the keyboard", function () {
    return driver.hideDeviceKeyboard();
});
