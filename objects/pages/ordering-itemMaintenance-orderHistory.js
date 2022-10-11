const { driver } = require("../../utils/android");
const { clickDropDownOption } = require("../helpers/appActions");
const touchActions = require("../helpers/touchActions");

module.exports = {
    chooseMonth: async (month) => {
        //cannot select November or December
        await driver.elementById("month_drop_down").click();
        return clickDropDownOption(month);
    },

    chooseYear: async (year) => {
        await driver.elementById("year_drop_down").click();
        return clickDropDownOption(year);
    },

    scrollOrderHistoryUntilTextVisible: async (text) => {
        const elementId = await driver
            .elementById("rv_order_history_items")
            .getAttribute("resourceId");

        return touchActions.scrollUntilTextVisible(elementId, text);
    }
};
