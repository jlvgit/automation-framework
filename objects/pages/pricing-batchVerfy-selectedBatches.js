const { driver } = require("../../utils/android");

module.exports = {
    clickClearButton: async () => {
        return driver.elementById("btn_clear_batches_f1").click();
    },

    clickRemoveButton: async () => {
        return driver.elementById("btn_remove_batch_f3").click();
    },

    goToVerify: async () => {
        return driver.elementById("btn_verify_batch_F10").click();
    },

    scrollBatchUntilTextVisible: async (text) => {
        //needs to be tested further with features
        const elementId = await driver
            .elementById("batch_recycler_view")
            .getAttribute("resourceId");

        return touchActions.scrollUntilTextVisible(elementId, text).click();
    }
};
