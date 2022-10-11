const { Then } = require("@cucumber/cucumber");
const { expect } = require("chai");
const storeWalk = require("../../objects/pages/storeWalk");

Then("Store Walk has loaded", async () => {
    await storeWalk.loadingComplete();
});

Then("store walk title should display the text {string}", async (text) => {
    const titleText = await storeWalk.getTitleText();
    expect(titleText).to.equal(text);
});

Then(
    "the user expands the Show/Line History/Stores/Price area",
    async function () {
        const elementSize = await storeWalk.toggleHistory();

        expect(elementSize.endSize.height).to.be.below(
            elementSize.startSize.height * 2
        );
    }
);

Then(
    "the user collapses the Show/Line History/Stores/Price area",
    async function () {
        const elementSize = await storeWalk.toggleHistory();

        expect(elementSize.endSize.height).to.be.above(
            elementSize.startSize.height / 2
        );
    }
);

Then(
    "scroll the Show/Line History/Stores/Price area until the text {string} is visible",
    async function (searchText) {
        const cardText = await storeWalk.scrollHistoryUntilTextVisible(
            searchText
        );
        expect(cardText).to.equal(searchText);
    }
);

Then("the user goes to the {string} tab", (tab) => {
    return storeWalk.switchToTab(tab);
});

Then("the user enters {string} for the On Hand value", (string) => {
    return storeWalk.editOnHand(string);
});

Then("the user enters {string} for the Retail Multiple value", (string) => {
    return storeWalk.editRetailMultiple(string);
});

Then("the user enters {string} for the Retail Price value", (string) => {
    return storeWalk.editRetailPrice(string);
});

Then(
    "the Retail Multiple should have a value of {string}",
    async function (string) {
        const retailMultipleValue = await storeWalk.getRetailMultiple();
        expect(retailMultipleValue).to.equal(string);
    }
);

Then(
    "the Retail Price should have a value of {string}",
    async function (string) {
        const retailPriceValue = await storeWalk.getRetailPrice();
        expect(retailPriceValue).to.equal(string);
    }
);

Then("the On hand should have a value of {string}", async function (string) {
    const onHandValue = await storeWalk.getOnHand();
    expect(onHandValue).to.equal(string);
});

Then("the user selects {string} from the Fuel Saver Dropdown", (value) => {
    return storeWalk.selectFuelSaverDropdownValue(value);
});

Then(
    "the Fuel Saver input should have a value of {string}",
    async function (value) {
        const fuelSaver = await storeWalk.getFuelSaver();
        expect(fuelSaver).to.equal(value);
    }
);
