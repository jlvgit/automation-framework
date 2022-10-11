const { driver } = require("../../utils/android");
const { scrollUntilTextVisible } = require("../helpers/touchActions");

module.exports = {
    removeProductFromGroup: () => {
        return driver.elementById("btn_remove_constraint_layout").click();
    },

    addProductToGroup: () => {
        return driver.elementById("button_add_product_text_view").click();
    },

    scrollSigns: async (searchText) => {
        //test when steps and features are done
        const elementId = await driver
            .elementById("rv_group_items")
            .getAttribute("resourceId");
        return scrollUntilTextVisible(elementId, searchText);
        //click sibling element (checkbox)
    }
};
