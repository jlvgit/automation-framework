const { driver } = require("../../utils/android");
const { clickDropDownOption } = require("../helpers/appActions");

module.exports = {
    selectDepartment: async (dept) => {
        await driver.elementById("actvDepartment").click();

        await driver.elementById("actvDepartment").type(dept);

        await clickDropDownOption(dept, 4);
    },

    // ================================================================== Buttons
    tapSuspendF4Button: () => {
        return driver.elementById("suspendF4").click();
    },

    tapFinishF2Button: () => {
        return driver.elementById("btFinishF2").click();
    },

    // ================================================================== Inputs
    //The upc field before any items are scanned
    editUpc: (upc) => {
        return driver.elementById("tvUpcValue").type(upc);
    },

    //The upc field after any items are scanned
    editItemUpc: (upc) => {
        return driver.elementById("tietUpc").type(upc);
    },

    editQuantity: (quantity) => {
        return driver.elementById("tietQuantity").type(quantity);
    },

    // ================================================================== Text Views
    getItemListCount: async () => {
        return driver.elementById("tvSwipeGuide").text();
    },

    getOrderCode: async () => {
        return driver.elementById("tvOrderCodeValue").text();
    },

    getDescription: async () => {
        return driver.elementById("tvDescriptionValue").text();
    },

    getSize: async () => {
        return driver.elementById("tvSizeValue").text();
    },

    getCasePack: async () => {
        return driver.elementById("tvCasepackValue").text();
    },

    getOnHand: async () => {
        return driver.elementById("tvOnHandValue").text();
    }
};
