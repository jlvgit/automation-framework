const { driver } = require("../../utils/android");
const { clickDropDownOption } = require("../helpers/appActions");

module.exports = {
    //use item maintenance prev and next items
    clickSectionDropDown: async (section) => {
        await driver.elementById("section_dropdown").click();
        await clickDropDownOption(section, 4);
    },

    getUpcSA: () => {
        return driver.elementById("value_upc").text();
    },

    getDescriptionSA: () => {
        return driver.elementById("value_description").text();
    },

    getOrderCodeSA: () => {
        return driver.elementById("value_order_code").text();
    },

    getVendorSA: () => {
        return driver.elementById("value_vendor").text();
    },

    getLastSold: () => {
        return driver.elementById("value_last_sold").text();
    },

    changeSection: () => {
        return driver.elementById("btn_change_sect").click();
    },

    oSection: () => {
        return driver.elementById("btn_o_sect").click();
    },

    markInactive: () => {
        return driver.elementById("btn_mark_inactive").click();
    },

    openButton: () => {
        return driver.elementById("btn_open").click();
    },
};
