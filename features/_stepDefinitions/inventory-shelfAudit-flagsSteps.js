const { Given } = require("@cucumber/cucumber");
const shelfAuditFlags = require("../../objects/pages/inventory-shelfAudit-flags");
const chai = require("chai");

const expect = chai.expect;

chai.use(require("chai-datetime"));

Given("the inventory date is current", async () => {
    await shelfAuditFlags.updateLastUpdatedForStores();

    const newTimes = await shelfAuditFlags.getLastUpdatedForStores();

    expect(newTimes[0].lup_onhanddte).to.equalDate(new Date());
});

Given("the user scrolls to the bottom flags", async () => {
    await shelfAuditFlags.scrollToBottom();
});

Given(
    "the user selects {string} for the link-return code",
    async (returnCode) => {
        await shelfAuditFlags.flingToBottomOfReturnCode(returnCode);
    }
);

Given("the zero return code row exists in the database", async () => {
    await shelfAuditFlags.insertZeroReturnCode();
});

Given("tap(s) the Save button on the flags tab", () => {
    return shelfAuditFlags.tapSaveFlagsButton();
});
