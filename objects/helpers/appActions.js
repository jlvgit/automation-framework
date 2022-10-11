const { driver } = require("../../utils/android");

const dropDownListXPath = (index) => {
    return [
        "/hierarchy",
        `/android.widget.FrameLayout[${index}]`,
        "/android.widget.FrameLayout",
        "/android.widget.ListView",
    ].join("");
};

const dropDownOptionXPath = (text, index) => {
    return [
        "/hierarchy",
        `/android.widget.FrameLayout[${index}]`,
        "/android.widget.FrameLayout",
        "/android.widget.ListView",
        `/android.widget.TextView[@text='${text}']`,
    ].join("");
};

module.exports = {
    clickAndroidBackButton: () => {
        return driver.back();
    },

    clickBackButton: () => {
        return driver.elementById("nav_back_icon").click();
    },

    clickSeachIcon: () => {
        return driver.elementById("search_icon").click();
    },

    clickOptionsMenu: () => {
        return driver.elementById("options_menu_icon").click();
    },

    clickOptionsMenuItem: (option) => {
        return driver.elementByXPath(`//android.widget.TextView[@text="${option}"]`).click();
    },

    clickDropDownOption: async (value, index = 3) => {
        return driver.waitForElementByXPath(dropDownOptionXPath(value, index)).click();
    },

    tapOkButton: async () => {
        return driver.elementById("button_one_constraint_layout").click();
    },

    tapNoButton: async () => {
        return driver.elementById("button_one_constraint_layout").click();
    },

    tapYesButton: async () => {
        return driver.elementById("button_two_constraint_layout").click();
    },

    getAppBarText: async () => {
        return driver.elementById("one_title_text_view").text();
    },

    isKeyboardShown: async () => {
        return driver.isKeyboardShown();
    },

    getDialogText: async () => {
        return driver.elementById("device_msg_text_view").text();
    },

    getElementByText: (text) => {
        return driver.element("-android uiautomator", `new UiSelector().text("${text}")`);
    },

    getDropDownListElement: (index = 3) => {
        return driver.waitForElementByXPath(dropDownListXPath(index));
    },

    tapTab: (tabName) => {
        return driver.elementByAccessibilityId(tabName).click();
    },

    isTabSelected: (tabName) => {
        return driver.elementByAccessibilityId(tabName).isSelected();
    },
};
