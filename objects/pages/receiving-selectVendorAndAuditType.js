const { driver } = require("../../utils/android");
const { clickDropDownOption } = require("../helpers/appActions");

module.exports = {
    loadingComplete: async () => {
        const elementIds = ["tvExplain", "actVendors", "btNextF2"];

        for (const id of elementIds) {
            await driver.waitForElementById(id);
        }
    },

    // ================================================================== Dropdowns
    selectVendor: async (text) => {
        // the Vendor, PO and Invoice dropdowns all have the same id
        await driver.elementById("actVendors").click();

        await driver.elementById("actVendors").type(text);

        await clickDropDownOption(text, 4);
    },

    selectFromResumeDropdown: async (value) => {
        await driver.elementById("actResumeCredit").click();

        await clickDropDownOption(value, 4);
    },

    // ================================================================== Buttons
    tapNewAuditRadioButton: () => {
        return driver.elementById("rbNewAudit").click();
    },

    tapResumeAuditRadioButton: () => {
        return driver.elementById("rbResumeAudit").click();
    },

    tapNewCreditRadioButton: () => {
        return driver.elementById("rbNewCredit").click();
    },

    tapResumeCreditRadioButton: () => {
        return driver.elementById("rbResumeCredit").click();
    },

    tapDialogOkButton: () => {
        return driver.elementById("tv_natural_alert_dialog").click();
    },

    tapNextF2Button: () => {
        return driver.elementById("btNextF2").click();
    }
};
