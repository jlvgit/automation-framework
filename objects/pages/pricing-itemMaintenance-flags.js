const { driver } = require("../../utils/android");
const { clickDropDownOption } = require("../helpers/appActions");

module.exports = {
    clickCheckbox: (checkBoxName) => {
        //cannot check LPLD
        checkBoxName = checkBoxName.lower().replace(" ", "_");
        return driver.elementById(checkBoxName + "_checkBox").click();
    },

    editTare: (tare) => {
        return driver.elementById("tare_code_tiet").type(tare);
    },

    chooseDEADropdown: async (dea) => {
        await driver.elementById("dea_dropdown").click();
        return clickDropDownOption(dea);
    },

    chooseSalesTaxDropdown: async (tax) => {
        await driver.elementById("sales_tax_dropdown").click();
        return clickDropDownOption(tax);
    },

    chooseLinkRetCodeDropdown: async (linkRetCode) => {
        await driver.elementById("link_ret_code_dropdown").click();
        return clickDropDownOption(linkRetCode);
    },

    choosePOSMessageDropdown: async (posMessage) => {
        await driver.elementById("pos_msg_dropdown").click();
        return clickDropDownOption(posMessage);
    },

    chooseRestrictDropdown: async (restrict) => {
        await driver.elementById("restrict_dropdown").click();
        return clickDropDownOption(restrict);
    },

    editShell: (shell) => {
        return driver.elementById("shell_code_text").type(shell);
    },

    editShrink: (shrink) => {
        return driver.elementById("shrink_text").type(shrink);
    }
};
