const { Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const item = require("../../objects/pages/ordering-itemMaintenance-item");

Then("the user toggles the DNO", async function () {
    return item.toggleDNO();
});

Then("the user toggles the DNO until INV = 0", async function () {
    return item.toggleDNOInv();
});

Then("the order code should be {string}", async (text) => {
    const orderCodeText = await item.getOrderCode();
    expect(orderCodeText).to.equal(text);
});

Then("the vendor should be {string}", async (text) => {
    const vendorText = await item.getVendor();
    expect(vendorText).to.equal(text);
});

Then("the warehouse should be {string}", async (text) => {
    const warehouseText = await item.getWarehouse();
    expect(warehouseText).to.equal(text);
});

Then("the comm code should be {string}", async (text) => {
    const commCodeText = await item.getCommCode();
    expect(commCodeText).to.equal(text);
});

Then("the description should be {string}", async (text) => {
    const descriptionText = await item.getDescription();
    expect(descriptionText).to.equal(text);
});

Then("the UPC should be {string}", async (text) => {
    const upcText = await item.getUPC();
    expect(upcText).to.equal(text);
});

Then("the user taps the Save button", async function () {
    return item.tapSave();
});
