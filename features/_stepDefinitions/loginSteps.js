const { Given, When, Then } = require("@cucumber/cucumber");
const loginPage = require("../../objects/pages/login");
const { expect } = require("chai");
const fs = require("fs");

Given("the Login page( should) have/has loaded", async () => {
    await loginPage.loginPageLoaded();
});

When("a valid user id is entered", async () => {
    await loginPage.enterUsername();
});

When("a valid password is entered", async () => {
    await loginPage.enterPassword();
});

When("the Login button is tapped", async () => {
    await loginPage.tapLoginButton();
});

When("the app version is displayed", async () => {
    await loginPage.versionIsDisplayed();
});

Then("the app version should match the properties file", async () => {
    const properties = fs.readFileSync("../version.properties", "utf8");

    const versionInFile = properties.split("\n")[0].split("=")[1].trim();

    const displayedVersion = await loginPage.getVersionText("appVersion");

    expect(versionInFile).to.equal(displayedVersion);
});

Then("the store number should be {string}", async (storeNumber) => {
    const displayedStore = await loginPage.getVersionText("storeNumber");
    expect(storeNumber).to.equal(displayedStore);
});

Given("a user is logged in", async () => {
    await loginPage.loginPageLoaded();
    await loginPage.enterUsername();
    await loginPage.enterPassword();
    await loginPage.tapLoginButton();
});
