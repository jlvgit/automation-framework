const { driver } = require("../../utils/android");
const db = require("../../utils/database");
const touchActions = require("../helpers/touchActions");
const appActions = require("../helpers/appActions");

const getMaxStoreLineId = async () => {
    const id = await db.maxIdQueryBuilder("ReturnCode", "rco_storelineid");
    return id[0][""];
};

module.exports = {
    insertZeroReturnCode: async () => {
        const maxStorelineId = await getMaxStoreLineId();
        return db.insertIdentityQueryBuilder(
            "ReturnCode",
            [
                "rco_rcoid",
                "rco_descrip",
                "rco_storelineid",
                "rco_deleted",
                "rco_deposit",
                "rco_coupon",
                "rco_rsyid",
            ],
            [0, "'Zero Return Code for Test'", maxStorelineId + 1, 0, 2, 0, 1]
        );
    },

    updateLastUpdatedForStores: () => {
        return db.updateQueryBuilder("LastUpd", "lup_onhanddte", new Date());
    },

    getLastUpdatedForStores: () => {
        return db.selectQueryBuilder("LastUpd", "lup_locId", 2);
    },

    scrollToBottom: async () => {
        const element = await driver.waitForElementById("scrolling_container");
        await touchActions.fling(element, "down", 10000);
    },

    flingToBottomOfReturnCode: async (returnCode) => {
        await driver.elementById("link_ret_code_dropdown").click();

        const element = await appActions.getDropDownListElement();

        await new Promise((resolve) => setTimeout(resolve, 3 * 1000));

        await touchActions.fling(element, "down", 12000);

        await appActions.clickDropDownOption(returnCode);
    },

    tapSaveFlagsButton: () => {
        return driver.elementById("item_maintenance_flags_done_button").click();
    },
};
