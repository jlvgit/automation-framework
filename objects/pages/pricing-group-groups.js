const { driver } = require("../../utils/android");
const { clickDropDownOption } = require("../helpers/appActions");

module.exports = {
    chooseGroup: async (group) => {
        await driver.elementById("price_group_group_dropdown").click();
        await driver.elementById("price_group_group_dropdown").type(group);
        return clickDropDownOption(group, 4)
    },

    chooseGroupVendor: async (vendor) => {
        await driver.elementById("price_group_vendor_dropdown").click();
        await driver.elementById("price_group_vendor_dropdown").type(vendor);
        await clickDropDownOptionh(vendor, 4)
        //Should work if TLDR-1783 is fixed
    },

    enterGroupUPC: (UPC) => {
        return driver.elementById("pricing_group_upc_edit_text").type(UPC);
    },

    enterGroupOrderCode: (code) => {
        return driver
            .elementById("pricing_group_order_code_edit_text")
            .type(code);
    },

    getGroupDescription: () => {
        return driver
            .waitForElementById("pricing_group_description_value_text_view")
            .text();
    },

    getGroupSize: () => {
        return driver
            .waitForElementById("pricing_group_size_value_text_view")
            .text();
    },

    getGroupRetail: () => {
        return driver
            .waitForElementById("pricing_group_retail_value_text_view")
            .text();
    },

    groupRemove: async () => {
        return driver
            .elementById("pricing_group_button_remove_constraint_layout")
            .click();
    },

    groupClear: async () => {
        return driver.elementById("button_clear_constraint_layout").click();
    },

    clickNewGroup: async () => {
        return driver.elementById("button_new_group_constraint_layout").click();
    },

    groupDropdownIsDisplayed: () => {
        return driver.elementById("price_group_group_dropdown").isDisplayed();
    },

    getMixMatchLabel: () => {
        return driver.elementById("pricing_group_mix_match_header_text_view").text();
    },

    getMixMatchValue: () => {
        return driver.elementById("pricing_group_mix_match_value_text_view").text();
    }
};
