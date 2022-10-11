const { driver } = require("../../utils/android");

module.exports = {
    editSearchUPC: (upc) => {
        return driver.elementById("upc_tiet").type(upc);
    },

    editSearchOrderCode: (orderCode) => {
        return driver.elementById("order_code_tiet").type(orderCode);
    },

    clickSearchButton: () => {
        return driver.elementById("search_button").click();
    },

    searchVendorDropdown: () => {
        return driver.elementById("vendor_dropdown").click();
    }
};
