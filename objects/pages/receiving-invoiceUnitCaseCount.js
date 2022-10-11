const { driver } = require("../../utils/android");

module.exports = {
    editInvoiceCount: (count) => {
        return driver.elementById("tietInvoiceNumber").type(count);
    },

    editInvoiceTotal: (total) => {
        return driver.elementById("tietInvoiceTotal").type(total);
    },

    editInvoiceNumber: (number) => {
        return driver.elementById("tietInvoice").type(number);
    },

    tapSuspendF4Button: () => {
        return driver.elementById("suspendF4").click();
    },

    tapFinishF2Button: () => {
        return driver.elementById("btFinishF2").click();
    },

    getInvoiceTotalInstructions: async () => {
        return driver.elementById("tvEnterTotalUnit").text();
    }
};
