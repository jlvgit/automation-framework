const { driver } = require("../../utils/android");
const { clickDropDownOption } = require("../helpers/appActions");

module.exports = {
    loadingComplete: async () => {
        const elementIds = [
            "store_location_dropdown",
            "key_settings_serial",
            "settings_update_f9"
        ];

        for (const id of elementIds) {
            await driver.waitForElementById(id);
        }
    },

    selectLocation: async (location) => {
        await driver.elementById("store_location_dropdown").click();

        await clickDropDownOption(location);
    },

    getCurrentStore: async () => {
        return driver.elementById("value_settings_current_store").text();
    },

    getIP: async () => {
        return driver.elementById("value_settings_ip_address").text();
    },

    getModel: async () => {
        return driver.elementById("value_settings_model").text();
    },

    getSerialNumber: async () => {
        return driver.elementById("value_settings_serial").text();
    },

    getAppVersion: async () => {
        return driver.elementById("value_settings_app_version").text();
    },

    getLastUpdated: async () => {
        return driver.elementById("value_last_updated").text();
    },

    getSyncStatus: async (data) => {
        //give the row name, like "Locations" and returns "Synced" or "Out of Sync"
        return driver.elementByXPath(
            `//*[@text='${data}']/following-sibling::android.widget.TextView[1]`
        );
    },

    tapUpdateF9Button: () => {
        return driver.elementById("settings_update_f9").click();
    },

    tapUpdateF2Button: () => {
        return driver.elementById("update_f2").click();
    },

    tapSaveButton: () => {
        return driver.elementById("settings_save_f2").click();
    }
};
