const { Then } = require("@cucumber/cucumber");
const adHistory = require("../../objects/pages/ordering-itemMaintenance-adHistory");

Then(
    "the user scrolls the Ad History until {string} is visible",
    async (string) => {
        return adHistory.scrollAdHistoryUntilTextVisible(string);
    }
);
