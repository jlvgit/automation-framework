const { driver } = require("../../utils/android");
const { scrollUntilTextVisible } = require("../helpers/touchActions");
const { clickDropDownOption } = require("../helpers/appActions");

module.exports = {
    selectFromCreditDropdown: async (option) => {
        await driver.elementById("department_transfer_credit").click();
        await clickDropDownOption(option).click();
    },

    selectFromChargeDropdown: async (option) => {
        await driver.elementById("actv_department_transfer_charge").click();
        await clickDropDownOption(option).click();
    },

    editQuantity: async (quantity) => {
        await driver.elementById("department_transfer_quantity").type(quantity);
    },

    editUpc: async (upc) => {
        await driver.elementById("department_transfer_scan_upc").type(upc);
    },

    editAmount: async (amount) => {
        await driver.elementById("department_transfer_amount").type(amount);
    },

    toggleResaleCheckbox: async () => {
        await driver.elementById("department_transfer_resale_checkbox").click();
        return driver.elementById("department_transfer_resale_checkbox").getAttribute("checked");
    },

    tapDeleteButton: async () => {
        await driver.elementById("department_transfer_delete_f3").click();
    },

    tapApplyButton: async () => {
        await driver.elementById("department_transfer_apply_f2").click();
    },

    getTotalQty: async () => {
        return driver.elementById("department_transfer_total_quantity").getAttribute("text");
    },

    getTotalAmt: async () => {
        return driver.elementById("department_transfer_total_amount").getAttribute("text");
    },

    scrollToItemCardWithText: async () => {
        const elementId = await driver
            .elementById("department_transfer_recyclerview")
            .getAttribute("resourceId");

        await scrollUntilTextVisible(elementId, searchText);
    },

    getItemCards: async () => {
        return driver.elementsById("item_department_constraint_layout");
    },

    getItemCardInfo: async (itemCard) => {
        return {
            cost: await itemCard.elementById("value_department_transfer_item_cost").text(),
            qty: await itemCard.elementById("value_department_transfer_item_qty").text(),
            xcost: await itemCard.elementById("value_department_transfer_item_xcost").text(),
            resale: await itemCard.elementById("value_department_transfer_item_resale").text(),
        };
    },
};
