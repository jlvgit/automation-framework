const { Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const orderHistory = require("../../objects/pages/ordering-itemMaintenance-orderHistory");

Then("the user chooses {string} for the month in Order History", (string) => {
    return orderHistory.chooseMonth(string);
});

Then("the user chooses {string} for the year in Order History", (string) => {
    return orderHistory.chooseYear(string);
});

Then(
    "the user scrolls the Order History until {string} is visible",
    (string) => {
        return orderHistory.scrollOrderHistoryUntilTextVisible(string);
    }
);
