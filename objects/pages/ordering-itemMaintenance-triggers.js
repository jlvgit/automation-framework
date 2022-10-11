const { driver } = require("../../utils/android");

module.exports = {
    enterMinStock: (minStock) => {
        return driver.elementById("min_stock_tiet").type(minStock);
    },

    getMinStock: () => {
        return driver.waitForElementById("min_stock_tiet").text();
    },

    enterServiceGoal: (serviceGoal) => {
        return driver.elementById("service_goal_tiet").type(serviceGoal);
    },

    getServiceGoal: () => {
        return driver.waitForElementById("service_goal_tiet").text();
    },

    getActualTrigger: () => {
        return driver.waitForElementById("act_trigger_value").text();
    },

    getSuggestedTrigger: () => {
        return driver.waitForElementById("suggested_trigger_value").text();
    },

    getSafetyStock: () => {
        return driver.waitForElementById("safety_stock_value").text();
    },

    getUPCs: () => {
        return driver.waitForElementById("upc_value").text();
    },

    enterCaseMultiple: (caseMul) => {
        return driver.elementById("multiple_tiet").type(caseMul);
    },

    getCaseMultiple: () => {
        return driver.waitForElementById("multiple_tiet").text();
    },

    enterCaseMin: (caseMin) => {
        return driver.elementById("minimum_tiet").type(caseMin);
    },

    getCaseMin: () => {
        return driver.waitForElementById("minimum_tiet").text();
    },

    getLastWkMvmt: () => {
        return driver.waitForElementById("mv_lw_value").text();
    },

    getWktoDate: () => {
        return driver.waitForElementById("wk_tdt_value").text();
    },

    getOrderCycle: () => {
        return driver.waitForElementById("order_cycle_value").text();
    },

    getLeadTime: () => {
        return driver.waitForElementById("lead_time_value").text();
    },

    getOnHand: () => {
        return driver.waitForElementById("on_hand_value").text();
    },

    getOnOrder: () => {
        return driver.waitForElementById("on_order_value").text();
    },

    getWkForecast: () => {
        return driver.waitForElementById("week_forecast_value").text();
    }
};
