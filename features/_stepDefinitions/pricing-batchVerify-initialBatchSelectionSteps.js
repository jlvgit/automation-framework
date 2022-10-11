const { Given, Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const batchVerify = require("../../objects/pages/pricing-batchVerfy-initialBatchSelection");

Then("the Batch Verify Entry page has loaded", async function () {
    const batchVerifyText = await batchVerify.batchLoaded();
    expect(batchVerifyText).to.equal("Batch Verify");
});

Then("the {string} radio button is tapped", function (string) {
    return batchVerify.tapRadioButton(string);
});

Then("the batch {string} is selected", function (string) {
    return batchVerify.chooseBatch(string);
});

Then("the count should have a value of {string}", async function (count) {
    const displayedCount = await batchVerify.getCount();
    expect(displayedCount).to.equal(`Count: ${count}`);
});

Given("the Add Selected button is tapped", function () {
    return batchVerify.clickAddSelectedButton();
});

Given("the Batch button is tapped", function () {
    return batchVerify.clickBatchButton();
});

Given("the Clear button is tapped", function () {
    return batchVerify.clickClearButton();
});

Given(/^the (?:Verify|Apply) button is tapped$/u, function () {
    return batchVerify.clickVerifyApplyButton();
});

Then("a new temporary batch is created", async function () {
    const batchDesc = `Temp Batch ${Date.now()}`;
    await batchVerify.createTempBatch(batchDesc);

    globalThis.newBatch = await batchVerify.getBatchId(batchDesc);
    globalThis.newBatchId = globalThis.newBatch[0].bat_batid;
    globalThis.newBatchDesc = `${globalThis.newBatchId} - ${batchDesc}`;
});

Then("the new batch is selected", function () {
    return batchVerify.chooseBatch(globalThis.newBatchDesc);
});
