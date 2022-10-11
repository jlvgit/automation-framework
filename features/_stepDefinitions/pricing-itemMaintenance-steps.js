const { Given, Then } = require("@cucumber/cucumber");
const pricingIM = require("../../objects/pages/pricing-itemMaintenance");
const {
    getItemDataUntilMatching
} = require("../../objects/helpers/soapWebService");

const { expect } = require("chai");

Given(
    "the Pricing Item Maintenance label should display the text {string}",
    async (expectedLabelText) => {
        labelText = await pricingIM.getUpcLabelText();

        expect(expectedLabelText).to.equal(labelText);
    }
);

Then("the upc {string} should be reactivated", async (upc) => {
    const response = await getItemDataUntilMatching({
        upc,
        column: "ite_activeitem",
        expectedValue: "true"
    });

    expect(
        response.GetItemDataResult.diffgram.NewDataSet.Table.ite_activeitem
    ).to.equal("true");
});
