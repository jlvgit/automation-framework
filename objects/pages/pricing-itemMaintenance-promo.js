const { driver } = require("../../utils/android");
const { scrollUntilTextVisible } = require("../../objects/helpers/touchActions");
//can't make promos on the test server
//needs to be tested

module.exports = {
    scrollPromo: (searchText) => {
        //test when steps and features are done
        const elementId = await driver
            .elementById("rv_promo_items")
            .getAttribute("resourceId");
        return scrollUntilTextVisible(elementId, searchText);
    }
};
