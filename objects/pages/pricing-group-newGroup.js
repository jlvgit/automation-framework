const { driver } = require("../../utils/android");
const { clickDropDownOption } = require("../helpers/appActions");

module.exports = {
    existingGroupRadioButton: async () => {
        return driver
            .elementById("pricing_add_existing_group_radio_button")
            .click();
    },

    newGroupRadioButton: async () => {
        return driver.elementById("pricing_add_new_group_radio_button").click();
    },

    chooseExistingGroup: (group) => {
        await driver.elementById("price_group_upc_dropdown").click();
        await driver.elementById("price_group_upc_dropdown").type(group);
        return clickDropDownOption(group, 4);
    },

    nameNewGroup: (group) => {
        return driver
            .elementById("pricing_new_group_upc_edit_text")
            .type(group);
    },

    newGroupSave: async () => {
        return driver
            .elementById("pricing_button_save_new_group_constraint_layout")
            .click();
    }
};
