const { driver } = require("../../utils/android");

module.exports = {
    isTileDisplayed: async (tileName) => {
        const tile = await driver.elementByXPath(
            `//android.widget.TextView[contains(normalize-space(@text), '${tileName}') and contains(@resource-id, 'tile_')]`
        );
        return tile.isDisplayed();
    },

    getStoreCodeText: () => {
        return driver.waitForElementById("store_location_text_view").text();
    },

    getIpAddressText: () => {
        return driver.waitForElementById("device_ip_text_view").text();
    },

    tapTile: (tile) => {
        return driver.elementByXPath(`//*[contains(normalize-space(@text), '${tile}')]`).click();
    },

    logoutDialogIsDisplayed: () => {
        return driver.elementById("message_choice_dialog_constraint_layout").isDisplayed();
    },

    logoutDialogButtonTap: async (button) => {
        const buttonId =
            button === "No" ? "button_one_constraint_layout" : "button_two_constraint_layout";
        await driver.elementById(buttonId).click();
    },
};
