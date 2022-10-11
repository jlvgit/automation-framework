const { Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const cost = require("../../objects/pages/pricing-itemMaintenance-cost");

Then("the user inputs {int} for the case pack", (int) => {
    return cost.editCaseMultiple(int);
});

Then("the user inputs {int} for the case cost", (int) => {
    return cost.editCaseCost(int);
});

Then("the current net unit cost should be {string}", async (expectedCost) => {
    const displayedCost = await cost.getNetUnitCost();
    expect(expectedCost).to.equal(displayedCost);
});
