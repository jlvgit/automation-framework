const { Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const verify = require("../../objects/pages/pricing-batchVerfy-batchVerifyOrApply");

Then("the Batch Verify Scanning page has loaded", async function () {
    await verify.loadingComplete();
});

Then(
    "the user inputs a random future retail price with a max value of {float}",
    (maxPrice) => {
        return verify.inputRandomFutureRetailPrice(maxPrice);
    }
);

Then("the user inputs {string} for the future retail price", (string) => {
    return verify.inputFutureRetailPrice(string);
});

Then("the user inputs {string} for the future base price", (string) => {
    return verify.inputFutureBasePrice(string);
});

Then("the user inputs {string} for the current retail price", (string) => {
    return verify.inputCurrentRetailPrice(string);
});

Then("the user inputs {string} for the current base price", (string) => {
    return verify.inputCurrentBasePrice(string);
});

Then("the user taps the Batch Verify Save button", () => {
    return verify.clickSaveF2Button();
});

Then("the user taps the Batch Verify Print button", () => {
    return verify.clickPrint();
});

Then(
    "the future retail price should have a value of {string}",
    async (string) => {
        const displayedFutureRetailPrice = await verify.getFutureRetailPrice();
        expect(displayedFutureRetailPrice).to.equal(string);
    }
);

Then(
    "the future base price should have a value of {string}",
    async (string) => {
        const displayedFutureBasePrice = await verify.getFutureBasePrice();
        expect(displayedFutureBasePrice).to.equal(string);
    }
);

Then("the Future Retail fields should be visible", async function () {
    const isDisplayed = await verify.futureRetailIsDisplayed();
    expect(isDisplayed).to.equal("Future Retail");
});

Then("the Future Base fields should be visible", async function () {
    const isDisplayed = await verify.futureBaseIsDisplayed();
    expect(isDisplayed).to.equal("Future Base");
});

Then("the Future Date fields should be visible", async function () {
    const isDisplayed = await verify.futureDateIsDisplayed();
    expect(isDisplayed).to.equal("Future Date");
});

Then(
    "the future retail price of upc {string} should match the random price",
    { timeout: 75000 },
    (upc) => {
        return verify.getLoadVerificationUntilMatching({
            upc,
            column: "Future_TRetail",
            expectedValue: globalThis.randomPrice,
            batchId: globalThis.newBatchId
        });
    }
);

Then("the UPC field is clicked", () => {
    return verify.clickInUpc();
});
