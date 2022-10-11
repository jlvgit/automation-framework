const { driver } = require("../../utils/android");
const { clickDropDownOption } = require("../helpers/appActions");

module.exports = {
    chooseDepartmentFC: async (department) => {
        await driver.elementById("actvDepartment").click();
        return clickDropDownOption(department);
    },

    chooseAisleFC: async (aisle) => {
        await driver.elementById("actvAisle").click();
        return clickDropDownOption(aisle, 4);
    },

    chooseSectionFC: async (section) => {
        await driver.elementById("actSection").click();
        return clickDropDownOption(section, 4).click();
    },

    editUpcFC: (upc) => {
        return driver.elementById("tietUpc").type(upc);
    },

    editQuantityFC: (quantity) => {
        return driver.elementById("tietQuantity").type(quantity);
    },

    getDescriptionFC: () => {
        return driver.elementById("tvDescriptionValue").text();
    },

    getReducedFC: () => {
        return driver.elementById("tvReducedValue").text();
    },

    getInvValueFC: () => {
        return driver.elementById("tvInvValue").text();
    },

    getSizeFC: () => {
        return driver.elementById("tvSizeValue").text();
    },

    getRetailFC: () => {
        return driver.elementById("tvRetailValue").text();
    },

    getTotalCountFC: () => {
        //comes as Total Count: #
        return driver.elementById("tvTotalCount").text();
    },

    getTotalValueFC: () => {
        //comes as Total Value: $#.##
        return driver.elementById("tvTotalValue").text();
    },

    resetCount: () => {
        return driver.elementById("btResetCount").click();
    },
};
