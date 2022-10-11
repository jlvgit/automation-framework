const { driver } = require("../../utils/android");
const { clickDropDownOption } = require("../helpers/appActions");

module.exports = {
    getLastItemDescription: () => {
        return driver.elementById("value_last_item_heading_text_view").text();
    },

    getNumInQueue: () => {
        return driver
            .elementById("value_in_queue_item_heading_text_view")
            .text();
    },

    getPrintUPC: () => {
        return driver.elementById("value_upc").text();
    },

    editQuantity: (quantity) => {
        return driver.elementById("quantity_edit_text").type(quantity);
    },

    chooseType: async (type) => {
        //does not scroll down
        await driver.elementById("type_dropdown").click();
        return clickDropDownOption(type);
    },

    chooseSize: async (size) => {
        //does not scroll down
        await driver.elementById("size_dropdown").click();
        return clickDropDownOption(size);
    },

    getPrintDescription: () => {
        return driver.elementById("value_description").text();
    },

    getPrintRetail: () => {
        return driver.elementById("value_retail").text();
    },

    getPrintBase: () => {
        return driver.elementById("value_base").text();
    },

    getPrintMixMatch: () => {
        return driver.elementById("value_mixmatch").text();
    },

    clickAddToQueue: () => {
        return driver.elementById("button_queue_constraint_layout").click();
    }
};
