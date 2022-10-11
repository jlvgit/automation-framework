const { Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const item = require("../../objects/pages/pricing-itemMaintenance-item");

Then("the current UPC should be {string}", async (expectedUPC) => {
    const displayedUPC = await item.getImUPC();
    expect(expectedUPC).to.equal(displayedUPC);
});

Then("the user goes to the previous item", () => {
    return item.previousItem(int);
});

Then("the user goes to the next item", () => {
    return item.nextItem(int);
});

Then("the user inputs {int} for the retail multiple", (int) => {
    return item.editRetailMultiple(int);
});

Then("the user inputs {int} for the retail multiple", (int) => {
    return item.editRetailMultiple(int);
});

Then("the user inputs {int} for the retail cost", (int) => {
    return item.editRetailCost(int);
});

Then("the user inputs {int} for the base multiple", (int) => {
    return item.editBaseMultiple(int);
});

Then("the user inputs {int} for the retail cost", (int) => {
    return item.editBaseCost(int);
});

Then("the user inputs {int} for the on hand", (int) => {
    return item.editOnHand(int);
});

Then("the current retail GP should be {string}", async (expectedGP) => {
    const displayedGP = await item.getRetailGP();
    expect(expectedGP).to.equal(displayedGP);
});

Then("the current base GP should be {string}", async (expectedGP) => {
    const displayedGP = await item.getBaseGP();
    expect(expectedGP).to.equal(displayedGP);
});

Then("the user inputs {string} for the department", (string) => {
    return item.clickDepartmentDropdown(string);
});

Then("the user taps the edit description pencil", () => {
    return item.clickEditDesciptions();
});

Then("the user inputs {string} for the POS description", (string) => {
    return item.editPosDesciption(string);
});

Then("the user inputs {string} for the description", (string) => {
    return item.editDescription(string);
});

Then("the user inputs {string} for the size", (string) => {
    return item.editSizeValue(string);
});

Then("the user inputs {string} for the unit", (string) => {
    return item.clickUnitDropdown(string);
});

Then("the user inputs {string} for the section", (string) => {
    return item.clickSectionDropDown(string);
});

Then("the user inputs {string} for the vendor", (string) => {
    return item.clickVendorDropdown(string);
});

Then("the user inputs {string} for the mix match", (string) => {
    return item.clickMixMatchDropdown(string);
});

Then("the user inputs {string} for the order code", (string) => {
    return item.editOrderCode(string);
});

Then(
    "the retail price in the Pricing IM cost tab should be {string}",
    async (expectedPrice) => {
        displayedPrice = await item.getRetailPrice();
        expect(expectedPrice).to.equal(displayedPrice);
    }
);

Then(
    "the base price in the Pricing IM cost tab should be {string}",
    async (expectedBase) => {
        displayedBase = await item.getBasePrice();
        expect(expectedBase).to.equal(displayedBase);
    }
);

Then(
    "the POS Description in the Pricing IM cost tab should be {string}",
    async (expectedPOSDesc) => {
        displayedPOSDesc = await item.getPOSDescription();
        expect(expectedPOSDesc).to.equal(displayedPOSDesc);
    }
);

Then(
    "the Description in the Pricing IM cost tab should be {string}",
    async (expectedDesc) => {
        displayedDesc = await item.getDescription();
        expect(expectedDesc).to.equal(displayedDesc);
    }
);
