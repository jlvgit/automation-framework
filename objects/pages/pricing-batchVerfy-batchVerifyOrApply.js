const { driver } = require("../../utils/android");
const { retryUntilTrue } = require("../../utils/retry");

const { clickDropDownOption } = require("../helpers/appActions");
const soap = require("../helpers/soapWebService");

const Chance = require("chance");
const chance = new Chance();

module.exports = {
    loadingComplete: async () => {
        return driver
            .elementById("value_batch_verify_id")
            .isDisplayed()
            .elementById("btn_save_f2")
            .isDisplayed()
            .elementById("btn_print_f1")
            .isDisplayed();
    },

    inputUpc: (upc) => {
        //bug will not let the user hit enter to scan
        return driver.elementById("batch_verify_upc_edittext").type(upc);
    },

    clickInUpc: () => {
        return driver.elementById("batch_verify_upc_edittext").click();
    },

    inputCurrentRetailMultiple: async (multiple) => {
        await driver.elementById("key_current_retail_edittext_1").clear();
        return driver.elementById("key_current_retail_edittext_1").type(multiple);
    },

    inputCurrentRetailPrice: async (cost) => {
        await driver.elementById("key_current_retail_edittext_2").clear();
        return driver.elementById("key_current_retail_edittext_2").type(cost);
    },

    inputCurrentBaseMultiple: async (multple) => {
        await driver.elementById("key_current_base_edittext_1").clear();
        return driver.elementById("key_current_base_edittext_1").type(multple);
    },

    inputCurrentBasePrice: async (cost) => {
        await driver.elementById("key_current_base_edittext_2").clear();
        return driver.elementById("key_current_base_edittext_2").type(cost);
    },

    chooseMixMatch: async (mixMatch) => {
        await driver.elementById("key_mix_match_dropdown").click();
        await driver.elementById("key_mix_match_dropdown").type(mixMatch);
        await clickDropDownOption(mixMatch);
    },

    getBatchVerifyDescription: () => {
        return driver.elementById("key_description_value").text();
    },

    getBatchVerifyCommodityCode: () => {
        return driver.elementById("key_commodity_code_value").text();
    },

    getBatchVerifyOrderCode: () => {
        return driver.elementById("key_order_code_value").text();
    },

    toggleCreateSign: () => {
        return driver.elementById("batch_verify_sign_checkbox").click();
    },

    inputSignQuantity: (quantity) => {
        return driver.elementById("batch_verify_quantity_edittext").type(quantity);
    },

    chooseSignType: async (signType) => {
        //can only select visible options
        await driver.elementById("key_sign_type_dropdown").click();
        await clickDropDownOption(signType);
    },

    chooseSize: async (size) => {
        //can only select visible options
        await driver.elementById("key_size_dropdown").click();
        await clickDropDownOption(size);
    },

    futureRetailIsDisplayed: async () => {
        return driver
            .elementById("key_future_retail_edittext_1")
            .isDisplayed()
            .print("\nFuture Retail Multiple is present: ")
            .elementById("key_future_retail_edittext_2")
            .isDisplayed()
            .print("Future Retail Price is present: ")
            .elementById("key_future_retail_header")
            .text();
    },

    futureBaseIsDisplayed: async () => {
        return driver
            .elementById("key_future_base_edittext_1")
            .isDisplayed()
            .print("\nFuture Base Multiple is present: ")
            .elementById("key_future_base_edittext_2")
            .isDisplayed()
            .print("Future Base Price is present: ")
            .elementById("key_future_base_header")
            .text();
    },

    futureDateIsDisplayed: async () => {
        return driver
            .elementById("key_future_date_value")
            .isDisplayed()
            .elementById("key_future_date_label")
            .text();
    },

    inputFutureRetailMultiple: async (multiple) => {
        await driver.elementById("key_future_retail_edittext_1").clear();
        return driver.elementById("key_future_retail_edittext_1").type(multiple);
    },

    inputFutureRetailPrice: async (price) => {
        return driver.elementById("key_future_retail_edittext_2").clear().type(price);
    },

    inputRandomFutureRetailPrice: async (maxPrice) => {
        globalThis.randomPrice = chance.dollar({ max: maxPrice }).substring(1);

        return driver
            .elementById("key_future_retail_edittext_2")
            .clear()
            .type(globalThis.randomPrice);
    },

    getLoadVerificationUntilMatching: async ({
        upc,
        column,
        expectedValue,
        batchId,
        attempts = 15,
        interval = 5000,
    }) => {
        return retryUntilTrue(
            `\nChecking future retail price of ${upc}`,
            attempts,
            interval,
            async () => {
                const response = await soap.loadItemVerification(upc, batchId);

                const itemData = response.LoadItemVerificationResult.diffgram.NewDataSet.Table;

                const columnData = itemData[column];

                globalThis.futureBatchId = itemData["future_batch"];

                console.log(`Expecting: ${expectedValue}, Got: ${columnData}`);

                return columnData === expectedValue ? response : false;
            }
        );
    },

    inputFutureBaseMultiple: async (multple) => {
        await driver.elementById("key_future_base_edittext_1").clear();
        return driver.elementById("key_future_base_edittext_1").type(multple);
    },

    inputFutureBasePrice: async (price) => {
        await driver.elementById("key_future_base_edittext_2").clear();
        return driver.elementById("key_future_base_edittext_2").type(price);
    },

    getFutureRetailMultiple: () => {
        return driver.elementById("key_future_retail_edittext_1").text();
    },

    getFutureRetailPrice: () => {
        return driver.elementById("key_future_retail_edittext_2").text();
    },

    getFutureBaseMultiple: () => {
        return driver.elementById("key_future_base_edittext_1").text();
    },

    getFutureBasePrice: () => {
        return driver.elementById("key_future_base_edittext_2").text();
    },

    getFutureDate: () => {
        //returns "MO/DA/YEAR HR:MI?M"
        return driver.elementById("key_future_date_value").text();
    },

    getBatchNum: () => {
        //returns #######
        return driver.elementById("key_batch_verify_id").text();
    },

    getBatchInfo: () => {
        //returns name of batch
        return driver.elementById("value_batch_verify_id").text();
    },

    clickSaveF2Button: async () => {
        await driver.waitForElementById("btn_save_f2").isDisplayed();
        return driver.elementById("btn_save_f2").click();
    },

    clickNotApplied: () => {
        return driver.elementById("btn_print_f1").click();
    },

    clickPrint: () => {
        return driver.elementById("btn_print_f1").click();
    },

    getSelectedBatches: () => {
        return driver.waitForElementById("pricing_select_title").text();
    },

    getClearedBatches: () => {
        return driver.waitForElementById("batch_recycler_view").text();
    },
};
