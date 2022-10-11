const { driver } = require("../../utils/android");

module.exports = {
    editDeliveryDate: (date) => {
        return driver.elementById("tietDeliveryDate").type(date);
    },

    editInvoiceDate: (date) => {
        return driver.elementById("tietInvoiceDate").type(date);
    }
};
