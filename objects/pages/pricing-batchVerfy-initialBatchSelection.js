const { driver } = require("../../utils/android");
const db = require("../../utils/database");
const adb = require("../../utils/adb");

const { clickDropDownOption } = require("../helpers/appActions");

const dateFormat = require("dateformat");

const now = new Date();

module.exports = {
    tapRadioButton: (button) => {
        button = button.replaceAll(" ", "");
        switch (button) {
            case "VerifyAppliedBatch":
                radioButtonId = "verify_applied_batch";
                break;
            case "ApplyasScanned":
                radioButtonId = "apply_as_scanned";
                break;
            case "ApplyEntireBatch":
                radioButtonId = "apply_entire_batch";
        }
        return driver.elementById(radioButtonId).click();
    },

    batchLoaded: async () => {
        await driver.waitForElementById("verify_applied_batch").isEnabled();
        return driver.elementById("one_title_text_view").text();
    },

    clickBatchButton: () => {
        return driver.elementById("btn_batch_f4").click();
    },

    clickVerifyApplyButton: () => {
        return driver.elementById("btn_verify_f2").click();
    },

    clickAddSelectedButton: () => {
        return driver.elementById("btn_add_selected_f3").click();
    },

    clickClearButton: () => {
        return driver.elementById("btn_clear_batches_f1").click();
    },

    chooseBatch: async (batch) => {
        await driver.elementById("batch_verify_batch_items").click();
        await driver.elementById("batch_verify_batch_items").type(batch);
        //await adb.inputText(batch);

        return clickDropDownOption(batch, 4);
    },

    getCount: () => {
        //returns "Count: #"
        return driver.waitForElementById("textview_applied_batch_count").text();
    },

    createTempBatch: (bat_descrip) => {
        console.log(`Creating new batch named ${bat_descrip}`);

        return db.insertQueryBuilder("Batch", {
            bat_bfuid: 4,
            bat_bstid: 1,
            bat_locid: 2,
            bat_sheid: null,
            bat_sitid: 79,
            bat_descrip,
            bat_date: dateFormat(now, "yyyy-mm-dd HH:MM:ss"),
            bat_begindate: dateFormat(now, "yyyy-mm-dd HH:MM:ss"),
            bat_enddate: "2070-01-01 00:00:00",
            bat_apply: 1,
            bat_perm: 0,
            bat_reverse: 0,
            bat_createsign: 0,
            bat_applybysection: 0,
            bat_applybydate: 0,
            bat_endbysection: 0,
            bat_endbydate: 1,
            bat_linkbatchid: null,
            bat_corporate: 0,
            bat_pricechange: 0,
            bat_corpid: null,
            bat_comment: null,
        });
    },

    getBatchId: (description) => {
        return db.selectWhereQueryBuilder("Batch", "bat_descrip", description);
    },
};
