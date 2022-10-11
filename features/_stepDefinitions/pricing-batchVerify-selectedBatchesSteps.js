const { Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const verify = require("../../objects/pages/pricing-batchVerfy-selectedBatches");

Then(
    "the selected batches should display the text {string}",
    async function (string) {
        const displayedBatch = await verify.getClearedBatches();
        expect(displayedBatch).to.equal(string);
    }
);
