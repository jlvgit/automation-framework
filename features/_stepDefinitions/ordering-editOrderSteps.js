const { Then } = require("@cucumber/cucumber");
const editOrder = require("../../objects/pages/ordering-editOrders");
const { expect } = require("chai");

Then("the new order is selected", () => {
    return editOrder.chooseOrder(globalThis.newOrder);
});

Then("the {string} department is selected", (department) => {
    return editOrder.chooseDepartment(department);
});

Then("the description text should be {string}", async (expectedDescription) => {
    const displayedDescription = await editOrder.getDescription();

    expect(expectedDescription).to.equal(displayedDescription);
});

Then("the SOQ input is focused", async () => {
    return editOrder.clickSOQ();
});

Then("order code {string} is retrieved", async (orderCode) => {
    return editOrder.getItemByOrderCode(orderCode);
});

Then("the user inputs {string} for the SOQ", (SOQ) => {
    return editOrder.enterSOQ(SOQ);
});

Then("the SOQ should be {string}", async (expectedSOQ) => {
    const displayedSOQ = await editOrder.getSOQ();

    expect(expectedSOQ).to.equal(displayedSOQ);
});

Then("a user taps the save button", function () {
    return editOrder.clickSave();
});

Then("the Wine & Spirit department is tapped", function () {
    return editOrder.flingToBottomDepartment("Wine & Spirit");
});
