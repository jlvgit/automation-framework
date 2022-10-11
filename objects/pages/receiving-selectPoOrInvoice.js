const { driver } = require("../../utils/android");
const { clickDropDownOption } = require("../helpers/appActions");

module.exports = {
    selectInvoiceOrPO: async (text) => {
        // the Vendor, PO and Invoice dropdowns all have the same id
        await driver.elementById("actVendors").click();

        await driver.elementById("actVendors").type(text);

        await clickDropDownOption(text, 4);
    },

    tapNextF2Button: () => {
        return driver.elementById("btNextF2").click();
    }
};
