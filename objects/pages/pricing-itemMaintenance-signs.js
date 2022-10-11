const { driver } = require("../../utils/android");
const { scrollUntilTextVisible } = require("../../objects/helpers/touchActions");

module.exports = {
    deleteSign: () => {
        return driver.elementById("btn_delete_constraint_layout").click();
    },

    addSign: () => {
        return driver.elementById("button_add_text_view").click();
    },

    printSign: () => {
        return driver.elementById("button_print_constraint_layout").click();
    },

    scrollSigns: (searchText) => {
        //test when steps and features are done
        const elementId = await driver
            .elementById("rv_sign_items")
            .getAttribute("resourceId");
        return scrollUntilTextVisible(elementId, searchText).click();
    }
};
