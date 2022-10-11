const { driver } = require("../../utils/android");

module.exports = {
    getUPC: () => {
        return driver.waitForElementById("upc_text").text();
    },

    getDescription: () => {
        return driver.waitForElementById("description_text").text();
    },

    getSize: () => {
        return driver.waitForElementById("size_text").text();
    },

    getRetail: () => {
        return driver.waitForElementById("retail_text").text();
    },

    getCompareUPC: () => {
        return driver.waitForElementById("comparison_upc_text").text();
    },

    getCompareDescription: () => {
        return driver.waitForElementById("comparison_description_text").text();
    },

    getCompareSize: () => {
        return driver.waitForElementById("comparison_size_text").text();
    },

    getCompareRetail: () => {
        return driver.waitForElementById("comparison_retail_text").text();
    },

    compareClear: async () => {
        return driver.elementById("btn_clear").click();
    },

    comparePrint: async () => {
        return driver.elementById("btn_print").click();
    },
};
