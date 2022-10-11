const { driver } = require("../../utils/android");

module.exports = {
    loadingComplete: async () => {
        const elementIds = [
            "item_rank_recyclerview",
            "item_rank_title",
            "item_rank_do_not_order_btn",
        ];

        for (const id of elementIds) {
            await driver.waitForElementById(id);
        }
    },

    tap4wksRadioButton: () => {
        return driver.elementById("rb_four_wks").click();
    },

    tap13wksRadioButton: () => {
        return driver.elementById("rb_thirteen_wks").click();
    },

    tap52wksRadioButton: () => {
        return driver.elementById("rb_fifty_two_wks").click();
    },

    tapDoNotOrderButton: () => {
        return driver.elementById("item_rank_do_not_order_btn").click();
    },

    getRadioButtonStatus: (button) => {
        ids = {
            "4wks": "rb_four_wks",
            "13wks": "rb_thirteen_wks",
            "52wks": "rb_fifty_two_wks",
        };
        return driver.elementById(ids[button]).getAttribute("checked");
    },

    scrollCardsUntilTextVisible: async (searchText) => {
        const elementId = await driver
            .elementById("item_rank_recyclerview")
            .getAttribute("resourceId");

        return scrollUntilTextVisible(elementId, searchText).text();
    },
};
