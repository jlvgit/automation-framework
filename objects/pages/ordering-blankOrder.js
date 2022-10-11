const { driver } = require("../../utils/android");
const { clickDropDownOption } = require("../helpers/appActions");

module.exports = {
    chooseWarehouse: async (warehouse) => {
        await driver.elementById("blank_order_warehouse_dropdown").click();
        await driver.elementById("blank_order_warehouse_dropdown").type(warehouse);
        return clickDropDownOption(warehouse, 4);
    },

    chooseDepartment: async (department) => {
        //cannot select departments off screen
        await driver.elementById("blank_order_department_dropdown").click();
        await clickDropDownOption(department);
    },

    createOrder: async () => {
        return driver.elementById("blank_order_create_order_btn").click();
    },

    enterWarehouseCode: (warehouseCode) => {
        return driver.elementById("blank_order_warehouse_code_tiet").type(warehouseCode);
    },

    enterQuantity: (quantity) => {
        return driver.elementById("blank_order_quantity_tiet").type(quantity);
    },

    addItemToOrder: async () => {
        return driver.elementById("add_item_to_order").click();
    },

    enterTodayDeliveryDate: async () => {
        await driver.elementById("blank_order_delivery_date_tiet").click();
        await driver.elementById("android:id/button1").click();
    },

    getTotalPieces: () => {
        return driver.waitForElementById("blank_order_total_pieces_text").text();
    },

    getQuantityOfItem: () => {
        return driver.elementById("blank_order_quantity_tiet").text();
    },
};
