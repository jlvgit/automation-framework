const { driver } = require("../../utils/android");

module.exports = {
    //use item maintenance page object

    editCount: (count) => {
        return driver.elementById("count_tiet").type(count);
    },

    itemsLeft: () => {
        return driver.elementById("btn_item_left_f2").click();
    },

    getShelfAuditUPC: () => {
        return driver.elementById("upc_text").text();
    },
};
