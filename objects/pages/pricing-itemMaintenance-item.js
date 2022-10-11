const { driver } = require("../../utils/android");
const { clickDropDownOption } = require("../../objects/helpers/appActions");

module.exports = {
    getImUPC: () => {
        return driver.elementById("upc_text").text();
    },

    previousItem: () => {
        return driver.elementById("prev_item").click();
    },

    nextItem: () => {
        return driver.elementById("next_item").click();
    },

    editRetailMultiple: (retailMultiple) => {
        return driver.elementById("retail_tiet").type(retailMultiple);
    },

    editRetailCost: (retailCost) => {
        return driver.elementById("retail_price").type(retailCost);
    },

    editBaseMultiple: (baseMultiple) => {
        return driver.elementById("base_tiet").type(baseMultiple);
    },

    editBaseCost: (baseCost) => {
        return driver.elementById("base_price").type(baseCost);
    },

    getRetailPrice: () => {
        return driver.elementById("retail_price").text();
    },

    getBasePrice: () => {
        return driver.elementById("base_price").text();
    },

    getPOSDescription: () => {
        return driver.elementById("value_pos_description").text();
    },

    getDescription: () => {
        return driver.elementById("value_description").text();
    },

    getSize: () => {
        return driver.elementById("size_tiet").text();
    },

    getUnit: () => {
        return driver.elementById("ounce_dropdown").text();
    },

    getSection: () => {
        return driver.elementById("section_dropdown").text();
    },

    getVendor: () => {
        return driver.elementById("vendor_dropdown").text();
    },

    getMixMatch: () => {
        return driver.elementById("mix_match_dropdown").text();
    },

    getOrderCode: () => {
        return driver.elementById("order_code_text").text();
    },

    getRetailGP: () => {
        return driver.elementById("retail_gp_percent_text").text();
    },

    getBaseGP: () => {
        return driver.elementById("base_gp_percent_text").text();
    },

    editOnHand: (onHandValue) => {
        return driver.elementById("oh_tiet").type(onHandValue);
    },

    clickDepartmentDropdown: async (department) => {
        await driver.elementById("department_dropdown").click();
        return clickDropDownOption(department, 4);
    },

    clickEditDesciptions: () => {
        return driver.elementById("edit_description_btn").click();
    },

    editPosDesciption: async (POSDescription) => {
        await driver.elementById("value_pos_description_tiet").clear();
        return driver.elementById("value_pos_description_tiet").type(POSDescription);
    },

    editDescription: async (description) => {
        await driver.elementById("value_description_tiet").clear();
        return driver.elementById("value_description_tiet").type(description);
    },

    editSizeValue: (sizeValue) => {
        return driver.elementById("size_tiet").type(sizeValue);
    },

    clickUnitDropdown: async (unit) => {
        //does not scroll down
        await driver.elementById("ounce_dropdown").click();
        return clickDropDownOption(unit);
    },

    clickSectionDropDown: async (section) => {
        await driver.elementById("section_dropdown").click();
        return clickDropDownOption(section, 4);
    },

    clickVendorDropdown: async (vendor) => {
        await driver.elementById("vendor_dropdown").click();
        return clickDropDownOption(vendor, 4);
    },

    clickMixMatchDropdown: async (mixMatch) => {
        await driver.elementById("mix_match_dropdown").click();
        return clickDropDownOption(mixMatch, 4);
    },

    editOrderCode: (orderCode) => {
        return driver.elementById("order_code_text").type(orderCode);
    },
};
