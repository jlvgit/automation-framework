const { driver } = require("../../utils/android");
const touchActions = require("../helpers/touchActions");

module.exports = {
    scrollAdHistoryUntilTextVisible: async (text) => {
        const elementId = await driver
            .elementById("rv_ad_history_items")
            .getAttribute("resourceId");

        return touchActions.scrollUntilTextVisible(elementId, text);
    },
};
