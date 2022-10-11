 const { When } = require("@cucumber/cucumber");
 const { expect } = require("chai");
 const pricingGroup = require("../../objects/pages/pricing-group-groups");

        When('the Group dropdown is visible', async () => {
           const groupDropdownIsDisplayed = await pricingGroup.groupDropdownIsDisplayed()
           expect(groupDropdownIsDisplayed).to.equal(true)
         });

         When('a user selects the {string} Group', function (groupName) {
           return pricingGroup.chooseGroup(groupName);
         });

         When('the Mix Match label is visible', async () => {
           const mixMatchLabelText = await pricingGroup.getMixMatchLabel()
           expect(mixMatchLabelText).to.equal("Mix Match")
         });


         When('the Mix Match value is {string}', async (mixMatchValue) => {
           const mixMatchText = await pricingGroup.getMixMatchValue()
           expect(mixMatchText).to.equal(mixMatchValue)
         });
