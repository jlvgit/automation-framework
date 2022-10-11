const { driver } = require("../../utils/android");

module.exports = {
    getUpcLabelText: () => {
        return driver.elementById("upc_label_text").text();
    },

    getUpcText: () => {
        return driver.elementById("upc_text").text();
    },
};
