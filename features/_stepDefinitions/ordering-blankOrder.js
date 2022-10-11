const { Then, When } = require("@cucumber/cucumber");
const { expect } = require("chai");
const blankOrder = require("../../objects/pages/ordering-blankOrder.js");

When('a user chooses {string} warehouse', function (warehouse) {
    return blankOrder.chooseWarehouse(warehouse)
});

When('a user chooses {string} department', function (department) {
    return blankOrder.chooseDepartment(department)
});

When('a user selects Today for delivery date', function () {
    return blankOrder.enterTodayDeliveryDate()
});

When('a user selects Today for an AFS date', function () {
    return blankOrder.enterTodayDeliveryDate()
});

When('a user taps Create Order button', function () {
    return blankOrder.createOrder()
});

When('a user enters a {string} for a warehouse code', function(warehouseCode){
    return blankOrder.enterWarehouseCode(warehouseCode)
});

When('a user enters a {string} for a quantity',function (quantity){
    return blankOrder.enterQuantity(quantity)
});

Then('a user taps Add Item To Order', function(){
    return blankOrder.addItemToOrder()
});

Then('quantity equals {string}', async (expectedQuantity) => {
   const actualQuantity = await blankOrder.getQuantityOfItem()
   expect(expectedQuantity).to.equal(actualQuantity)
});
