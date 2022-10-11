const { Then } = require("@cucumber/cucumber");
const adb = require("../../utils/adb");

Then("a user scans the upc {string}", async (barcode) => {
    await adb.scanBarcode(barcode, "LABEL-TYPE-EAN13");
});
