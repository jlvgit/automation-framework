const { driver } = require("../../utils/android");

const { clickDropDownOption } = require("../helpers/appActions");
const { scrollUntilTextVisible } = require("../helpers/touchActions");

module.exports = {
    loadingComplete: async () => {
        const elementIds = ["store_walk_title", "store_walk_batch"];

        for (const id of elementIds) {
            await driver.waitForElementById(id);
        }
    },

    getTitleText: () => {
        return driver.waitForElementById("store_walk_title").text();
    },

    isTabSelected: (tabName) => {
        return driver.elementByAccessibilityId(tabName).isSelected();
    },

    toggleHistory: async () => {
        await driver.hideDeviceKeyboard();

        const startSize = await driver
            .elementById("show_history_layout")
            .getSize();

        await driver.elementById("btn_show_history").click();

        const endSize = await driver
            .elementById("show_history_layout")
            .getSize();

        return { startSize, endSize };
    },

    scrollHistoryUntilTextVisible: async (searchText) => {
        const elementId = await driver
            .elementById("show_history_layout")
            .getAttribute("resourceId");

        return scrollUntilTextVisible(elementId, searchText).text(); //Extract text from finding element by text. Bit redundant, but leaves options for future.
    },

    switchToTab: (tabName) => {
        return driver.elementByAccessibilityId(tabName).click();
    },

    editOnHand: (onHandValue) => {
        return driver
            .elementById("store_walk_on_hand_edittext")
            .type(onHandValue);
    },

    getOnHand: () => {
        return driver.elementById("store_walk_on_hand_edittext").text();
    },

    editRetailMultiple: (multiple) => {
        return driver.elementById("store_walk_retail_new_tag").type(multiple);
    },

    getRetailMultiple: () => {
        return driver.waitForElementById("store_walk_retail_new_tag").text();
    },

    editRetailPrice: (retailPrice) => {
        return driver
            .elementById("store_walk_retail_tag_amount")
            .type(retailPrice);
    },

    getRetailPrice: () => {
        return driver.elementById("store_walk_retail_tag_amount").text();
    },

    editBaseMultiple: (multiple) => {
        return driver.elementById("store_walk_retail_new_base").type(multiple);
    },

    editBasePrice: (basePrice) => {
        return driver.elementById("store_walk_base_amount").type(basePrice);
    },

    selectFuelSaverDropdownValue: async (value) => {
        await driver.elementById("act_store_walk_fuel_saver").click();
        await driver.hideDeviceKeyboard();
        await clickDropDownOption(value);
    },

    getFuelSaver: async () => {
        return driver.elementById("act_store_walk_fuel_saver").text();
    },

    multipleUPCDropdown: () => {
        return driver.elementById("act_store_walk_upc").click();
    }
};
