const { driver } = require("../../utils/android");

module.exports = {
    sectionOrBackroom: (button) => {
        const id = {
            Section: "section_radio_btn",
            Backroom: "backroom_radio_btn",
        };
        return driver.elementById(id[button]).click();
    },

    scrollSection: async (searchText) => {
        //test when steps and features are done
        const elementId = await driver
            .elementById("shelf_audit_section_list_view")
            .getAttribute("resourceId");
        return scrollUntilTextVisible(elementId, searchText);
        //click sibling element (checkbox)
    },

    clearSection: () => {
        return driver.elementById("btn_clear_f1").click();
    },

    nextShelfAudit: () => {
        return driver.elementById("btn_next_f7").click();
    },
};
