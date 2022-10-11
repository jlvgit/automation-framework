const { driver } = require("../../utils/android");
const { clickDropDownOption } = require("../helpers/appActions");

module.exports = {
    getCount: () => {
        return driver.waitForElementById("value_count").text();
    },

    getCost: () => {
        return driver.waitForElementById("value_cost").text();
    },

    enterQuantity: (quantity) => {
        return driver.elementById("quantity_et").type(quantity);
    },

    enterOrderCode: (code) => {
        return driver.elementById("order_code_et").type(code);
    },

    getDescription: () => {
        return driver.waitForElementById("description_value_text_view").text();
    },

    getSize: () => {
        return driver.waitForElementById("size_value_text_view").text();
    },

    getUnitCost: () => {
        return driver.waitForElementById("unit_cos_value_text_view").text();
    },

    getRetail: () => {
        return driver.waitForElementById("retailer_value_text_view").text();
    },

    getBase: () => {
        return driver.waitForElementById("base_value_text_view").text();
    },

    chooseAdjustmentType: async (type) => {
        await driver.elementById("adjustment_type_dropdown").click();
        return clickDropDownOption(type);
    },

    chooseVendor: async (vendor) => {
        await driver.elementById("vendor_dropdown").click();
        await driver.elementById("vendor_dropdown").type(vendor);
        return clickDropDownOption(vendor);
    },

    enterUPC: (UPC) => {
        return driver.elementById("upc_et").type(UPC);
    },

    tapClear: () => {
        return driver.elementById("button_clear_constraint_layout").click();
    },

    tapSave: () => {
        return driver.elementById("button_save_constraint_layout").click();
    },
};
