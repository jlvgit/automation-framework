const { wd, driver } = require("../../utils/android");

const tabSwipes = {
    next: {
        start: { x: 1000, y: 700 },
        end: { x: 100, y: 700 }
    },
    previous: {
        start: { x: 100, y: 700 },
        end: { x: 1000, y: 700 }
    }
};

const tabBarScroll = {
    left: {
        start: { x: 1000, y: 310 },
        end: { x: 200, y: 310 }
    },
    right: {
        start: { x: 200, y: 310 },
        end: { x: 1000, y: 310 }
    }
};

const swipe = (startingPoint, endPoint, swipeSpeed = 200) => {
    const action = new wd.TouchAction(driver);
    return action
        .press(startingPoint)
        .wait(swipeSpeed)
        .moveTo(endPoint)
        .release()
        .perform();
};

const swipeTab = async (direction) => {
    await swipe(tabSwipes[direction].start, tabSwipes[direction].end);
};

const fling = (elementId, direction, speed) => {
    driver.execute("mobile: flingGesture", { elementId, direction, speed });
};

const scrollTabBar = async (direction) => {
    await swipe(tabBarScroll[direction].start, tabBarScroll[direction].end);
};

const scrollUntilTextVisible = (scrollableElement, searchText) => {
    const query = `new UiScrollable(new UiSelector().resourceId("${scrollableElement}")).scrollIntoView(new UiSelector().text("${searchText}").instance(0))`;
    return driver.element("-android uiautomator", query);
};

module.exports = {
    swipe,
    swipeTab,
    fling,
    scrollTabBar,
    scrollUntilTextVisible
};
