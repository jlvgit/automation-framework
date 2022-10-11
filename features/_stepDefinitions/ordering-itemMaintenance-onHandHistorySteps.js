const { Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const onHandHistory = require("../../objects/pages/ordering-itemMaintenance-onHandHistory");

Then("the user chooses {string} for the month in On Hand History", (string) => {
    return onHandHistory.chooseMonth(string);
});

Then("the user chooses {string} for the year in On Hand History", (string) => {
    return onHandHistory.chooseYear(string);
});

Then(
    "the user scrolls the On Hand History until {string} is visible",
    (string) => {
        return onHandHistory.scrollOnHandHistoryUntilTextVisible(string);
    }
);
