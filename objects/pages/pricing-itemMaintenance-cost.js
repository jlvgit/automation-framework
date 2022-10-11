const { driver } = require("../../utils/android");

module.exports = {
    editCaseMultiple: (caseMultiple) => {
        return driver.elementById("case_pack_tiet").type(caseMultiple);
    },

    editCaseCost: (caseCost) => {
        return driver.elementById("case_cost_tiet").type(caseCost);
    },

    getNetUnitCost: () => {
        return driver.elementById("value_net_unit_cost").text();
    },

    getAllowances: (num) => {
        ids = {
            CORP: "allowances_value_text",
            1: "allowances_1",
            2: "allowances_2",
            3: "allowances_3"
        };
        return driver.elementById(id[num]).text();
    },

    getBeginDate: (num) => {
        ids = {
            CORP: "beg_date_label_value",
            1: "beg_date_1",
            2: "beg_date_2",
            3: "beg_date_3"
        };
        return driver.elementById(id[num]).text();
    },

    getEndDate: (num) => {
        ids = {
            CORP: "end_date_label_value",
            1: "end_date_1",
            2: "end_date_2",
            3: "end_date_3"
        };
        return driver.elementById(id[num]).text();
    }
};
