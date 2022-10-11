const { Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const flags = require("../../objects/pages/pricing-itemMaintenance-flags");

Then("the user inputs {string} for the DEA", (string) => {
    return flags.chooseDEADropdown(string);
});

Then("the user inputs {string} for the sales tax", (string) => {
    return flags.chooseSalesTaxDropdown(string);
});

Then("the user inputs {string} for the link-return code", (string) => {
    return flags.chooseLinkRetCodeDropdown(string);
});

Then("the user inputs {string} for the POS message", (string) => {
    return flags.choosePOSMessageDropdown(string);
});

Then("the user inputs {string} for the restrict", (string) => {
    return flags.chooseRestrictDropdown(string);
});

Then("the user inputs {string} for the shell", (string) => {
    return flags.editShell(string);
});

Then("the user inputs {string} for the shrink", (string) => {
    return flags.editShrink(string);
});
