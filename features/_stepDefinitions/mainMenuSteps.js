const { Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const mainMenu = require("../../objects/pages/mainMenu");

const navigateToFlowFromMainMenu = async (firstTile, secondTile) => {
    let isTileDisplayed = await mainMenu.isTileDisplayed(firstTile);
    expect(isTileDisplayed).to.be.true;

    await mainMenu.tapTile(firstTile);

    isTileDisplayed = await mainMenu.isTileDisplayed(secondTile);
    expect(isTileDisplayed).to.be.true;

    await mainMenu.tapTile(secondTile);
};

Then("the Main Menu page has loaded", async () => {
    const store = await mainMenu.getStoreCodeText();
    const ip = await mainMenu.getIpAddressText();

    expect(store).to.equal("8718 - Main Store");
    expect(ip).to.match(/IP: (?:[0-9]{1,3}\.){3}[0-9]{1,3}/);
});

Then("the {string} app tile should be visible", async (tile) => {
    const isTileDisplayed = await mainMenu.isTileDisplayed(tile);
    expect(isTileDisplayed).to.be.true;
});

Then("a user taps the {string} app tile", async (tile) => {
    await mainMenu.tapTile(tile);
});

Then("the {string} button to log out is tapped", async (button) => {
    const dialogDisplayed = await mainMenu.logoutDialogIsDisplayed();
    expect(dialogDisplayed).to.be.true;
    await mainMenu.logoutDialogButtonTap(button);
});

Then("(then )go(es) to Edit Order", () => {
    return navigateToFlowFromMainMenu("Ordering", "Edit Orders");
});

Then("user navigates to Pricing Item Maintenance", () => {
    return navigateToFlowFromMainMenu("Pricing", "Item Maintenance");
});

Then("in Batch Verify", () => {
    return navigateToFlowFromMainMenu("Pricing", "Batch Verify");
});
