const { Then } = require("@cucumber/cucumber");
const touchActions = require("../../objects/helpers/touchActions");
const app = require("../../objects/helpers/appActions");
const { expect } = require("chai");

Then("the user swipes to the {string} on the tabs bar", (direction) => {
    return touchActions.scrollTabBar(direction.toLowerCase());
});

Then("the user swipes to the {string} tab", (direction) => {
    return touchActions.swipeTab(direction.toLowerCase());
});

Then("the Android back arrow is tapped", () => {
    return app.clickAndroidBackButton();
});

Then("the back arrow is tapped", () => {
    return app.clickBackButton();
});

Then("the search icon is tapped", () => {
    return app.clickSeachIcon();
});

Then("the options icon is tapped", () => {
    return app.clickOptionsMenu();
});

Then("the {string} option is tapped", (option) => {
    return app.clickOptionsMenuItem(option);
});

Then("the Ok button is tapped", () => {
    return app.tapOkButton();
});

Then("the Yes button is tapped", () => {
    return app.tapYesButton();
});

Then("(the )app bar( should) display(s) {string}", async (string) => {
    const appBarText = await app.getAppBarText();

    expect(appBarText.replace("\n", " ")).to.equal(string);
});

Then("a dialog should appear with the text {string}", async (string) => {
    const dialogText = await app.getDialogText();

    expect(dialogText.replace("\n", " ")).to.equal(string);
});

Then("the keyboard input should not be visible", async () => {
    keyboardIsShowing = await app.isKeyboardShown();

    expect(keyboardIsShowing).to.be.false;
});

Then("the keyboard input should be visible", async () => {
    keyboardIsShowing = await app.isKeyboardShown();

    expect(keyboardIsShowing).to.be.true;
});

Then("the current tab should be the {string} tab", async function (tabName) {
    const tabSelected = await app.isTabSelected(tabName);
    expect(tabSelected).to.be.true;
});

Then("the {string} tab is tapped", async function (tabName) {
    await app.tapTab(tabName);
});
