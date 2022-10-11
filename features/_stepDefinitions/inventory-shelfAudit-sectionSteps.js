const { Given } = require("@cucumber/cucumber");
const shelfAudit = require("../../objects/pages/inventory-shelfAudit-section");

Given("the Backroom radio button is selected", function () {
    return shelfAudit.sectionOrBackroom("Backroom");
});

Given("the Next button is tapped", function () {
    return shelfAudit.nextShelfAudit();
});
