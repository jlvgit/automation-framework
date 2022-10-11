const wd = require("wd");

const PORT = 4723;

const config = {
    platformName: "Android",
    platformVersion: "10",
    deviceName: "Android Emulator",
    appActivity: "com.activity.ToggleActivity",
    appPackage: "com.app.package",
    autoGrantPermissions: true,
    relaxedSecurity: true,
    allowInsecure: "adb_shell",
    automationName: "uiautomator2",
    eventTimings: true,
    enableMultiWindows: true,
};

const driver = wd.promiseChainRemote("localhost", PORT);

module.exports = {
    wd,
    driver,
    config,
};
