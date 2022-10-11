const { driver } = require("../../utils/android");

module.exports = {
    toggleDNO: () => {
        return driver.waitForElementById("dno_checkBox").click();
    },

    toggleDNOInv: () => {
        return driver.waitForElementById("dno_inv_checkBox").click();
    },

    getOrderCode: async () => {
        return driver.waitForElementById("order_code_value").text();
        //await delay(10000);
    },

    getVendor: () => {
        return driver.waitForElementById("vendor_value").text();
    },

    getWarehouse: () => {
        return driver.waitForElementById("warehouse_value").text();
    },

    getCommCode: () => {
        return driver.waitForElementById("comm_code_value").text();
    },

    getDescription: () => {
        return driver.waitForElementById("order_label_text").text();
    },

    getUPC: async () => {
        return driver.waitForElementById("act_store_walk_upc").text();
        //await delay(10000);
    },

    tapSave: () => {
        return driver.waitForElementById("button_save_constraint_layout").click();
    },
};
