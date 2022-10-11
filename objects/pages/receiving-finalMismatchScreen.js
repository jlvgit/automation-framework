const { driver } = require("../../utils/android");

module.exports = {
    showingCountsMismatchScreen: async () => {
        return driver
            .elementById("mismatch_invoice_fragment_layout")
            .isDisplayed();
    },

    showingCountsMatchOrSuspenedScreen: async () => {
        return driver
            .elementById("receiving_complete_fragment_layout")
            .isDisplayed();
    },

    // ================================================================== Buttons
    tapDoneF10Button: () => {
        return driver.elementById("doneF10").click();
    },

    tapNextF2Button: () => {
        return driver.elementById("btNextF2").click();
    },

    // ================================================================== Text Views
    getMismatchScreenTitle: async () => {
        return driver.elementById("tvAlertInvoiceTitle").text();
    },

    getMismatchScreenAuditCount: async () => {
        return driver.elementById("tvAuditValue").text();
    },

    getMismatchScreenInvoiceCount: async () => {
        return driver.elementById("tvInvoiceValue").text();
    },

    getMismatchScreenDifference: async () => {
        return driver.elementById("tvDifferenceValue").text();
    },

    getMismatchScreenMessage: async () => {
        return driver.elementById("tvAlertInvoiceMessage").text();
    },

    getMatchScreenTitle: async () => {
        return driver.elementById("tvSuccessTitle").text();
    },

    getMatchScreenMessage: async () => {
        return driver.elementById("tvSuccessMessage").text();
    }
};
