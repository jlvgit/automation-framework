const { driver } = require("../../utils/android");

const { clickDropDownOption, getDropDownListElement } = require("../helpers/appActions");
const { fling } = require("../helpers/touchActions");

const adb = require("../../utils/adb");

module.exports = {
    getDescription: () => {
        return driver.waitForElementById("value_description").text();
    },

    getDeliveryDate: () => {
        return driver.waitForElementById("value_del_date").text();
    },

    getNextDeliveryDate: () => {
        return driver.waitForElementById("value_next_del").text();
    },

    getCommCode: () => {
        return driver.waitForElementById("value_cmd_code").text();
    },

    getWTDMvmt: () => {
        return driver.waitForElementById("value_wtd_mvmt").text();
    },

    getLastWkMvmt: () => {
        return driver.waitForElementById("value_lastweek_mvmt").text();
    },

    getOnOrder: () => {
        return driver.waitForElementById("on_order_value").text();
    },

    getTotalOnHand: () => {
        return driver.waitForElementById("value_total_head").text();
    },

    getTotalOnHand: () => {
        return driver.waitForElementById("value_total_head").text();
    },

    chooseOrder: async (order) => {
        //order in the form of: ####### - vendor
        await driver.elementById("order_dropdown").click();
        await adb.inputText(order);
        return clickDropDownOption(order);
    },

    chooseOrderisVisible: () => {
        return driver.elementById("order_dropdown").isDisplayed();
    },

    selectMultipleUPC: async (upcWithDescription) => {
        //UPCandDescription in the form of: #############-Description
        await driver.elementById("upc_dropdown").click();
        await driver.elementById("upc_dropdown").type(upcWithDescription);
        return clickDropDownOption(upcWithDescription, 4);
    },

    chooseDepartment: async (department) => {
        //cannot select departments off screen
        await driver.elementById("department_dropdown").click();
        await clickDropDownOption(department);
    },

    enterOnHand: (onHand) => {
        return driver.elementById("onhand_et").type(onHand);
    },

    enterOrderCode: (orderCode) => {
        return driver.elementById("order_code_et").type(orderCode);
    },

    enterSOQ: (SOQ) => {
        return driver.elementById("soq_et").type(SOQ);
    },

    getSOQ: async () => {
        return driver.elementById("soq_et").text();
    },

    clickSOQ: () => {
        return driver.elementById("soq_et").click();
    },

    clickPrint: () => {
        return driver.elementById("btn_print_constraint_layout").click();
    },

    clickSave: async () => {
        await driver.hideDeviceKeyboard();
        return driver.elementById("button_save_constraint_layout").click();
    },

    getItemByOrderCode: async (orderCode) => {
        element = await driver.elementById("order_code_et");
        await element.click();
        await element.type(orderCode);
        await driver.pressKeycode(66);
    },

    flingToBottomDepartment: async (department) => {
        await driver.elementById("department_dropdown").click();

        element = await getDropDownListElement();

        await fling(element, "down", 10000);

        await clickDropDownOption(department);
    },
};
