const { driver } = require("../../utils/android");

module.exports = {
    editCreditInvoiceNumber: (number) => {
        return driver.elementById("tietInvoiceNumber").type(number);
    },

    editCreditUpc: (upc) => {
        return driver.elementById("tietUpc").type(upc);
    },

    editControlTotal: (total) => {
        return driver.elementById("tietControlTotal").type(total);
    },

    getRunningTotal: async () => {
        return driver.elementById("tvSuccessMessage").text();
    }
};
