const { driver } = require("../../utils/android");
const touchActions = require("../helpers/touchActions");

module.exports = {
    scrollNotAppliedUntilTextVisible: async (text) => {
        //needs to be tested further with features
        const elementId = await driver
            .elementById("batch_not_applied_recycler_view")
            .getAttribute("resourceId");

        return touchActions.scrollUntilTextVisible(elementId, text).click();
    }
};
