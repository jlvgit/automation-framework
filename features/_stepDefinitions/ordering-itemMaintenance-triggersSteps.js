const { Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const triggers = require("../../objects/pages/ordering-itemMaintenance-triggers");

Then("the user sets the Minimum Stock to {string}", async (text) => {
    return triggers.enterMinStock(text);
});

Then("the user sets the Service Goal to {string}", async (text) => {
    return triggers.enterServiceGoal(text);
});

Then("the user sets the Case Multiple to {string}", async (text) => {
    return triggers.enterCaseMultiple(text);
});

Then("the user sets the Case Minimum to {string}", async (text) => {
    return triggers.enterCaseMin(text);
});

Then("the Minimum Stock should be {string}", async (text) => {
    const minimumStockText = await triggers.getMinStock();
    expect(minimumStockText).to.equal(text);
});

Then("the Service Goal should be {string}", async (text) => {
    const serviceGoalText = await triggers.getServiceGoal();
    expect(serviceGoalText).to.equal(text);
});

Then("the Actual Trigger should be {string}", async (text) => {
    const actualTriggerText = await triggers.getActualTrigger();
    expect(actualTriggerText).to.equal(text);
});

Then("the Suggested Trigger should be {string}", async (text) => {
    const suggestedTriggerText = await triggers.getSuggestedTrigger();
    expect(suggestedTriggerText).to.equal(text);
});

Then("the Safety Stock should be {string}", async (text) => {
    const safetyStockText = await triggers.getSafetyStock();
    expect(safetyStockText).to.equal(text);
});

Then("the UPCs should be {string}", async (text) => {
    const upcsText = await triggers.getUPCs();
    expect(upcsText).to.equal(text);
});

Then("the Case Multiple should be {string}", async (text) => {
    const caseMultipleText = await triggers.getCaseMultiple();
    expect(caseMultipleText).to.equal(text);
});

Then("the Case Minimum should be {string}", async (text) => {
    const caseMinimumText = await triggers.getCaseMin();
    expect(caseMinimumText).to.equal(text);
});

Then("the Last Week Movement should be {string}", async (text) => {
    const lastWkMvmtText = await triggers.getLastWkMvmt();
    expect(lastWkMvmtText).to.equal(text);
});

Then("the Week to Date should be {string}", async (text) => {
    const wkToDateText = await triggers.getWktoDate();
    expect(wkToDateText).to.equal(text);
});

Then("the Order Cycle should be {string}", async (text) => {
    const orderCycleText = await triggers.getOrderCycle();
    expect(orderCycleText).to.equal(text);
});

Then("the Lead Time should be {string}", async (text) => {
    const leadTimeText = await triggers.getLeadTime();
    expect(leadTimeText).to.equal(text);
});

Then("the On Hand should be {string}", async (text) => {
    const onHandText = await triggers.getOnHand();
    expect(onHandText).to.equal(text);
});

Then("the On Order should be {string}", async (text) => {
    const onOrderText = await triggers.getOnOrder();
    expect(onOrderText).to.equal(text);
});

Then("the Week Forecast should be {string}", async (text) => {
    const wkForecastText = await triggers.getWkForecast();
    expect(wkForecastText).to.equal(text);
});
