const { Before, After } = require("@cucumber/cucumber");
const { config, driver } = require("../../utils/android");
const db = require("../../utils/database");

const soap = require("../../objects/helpers/soapWebService");

const vars = require("./variables");
const defaultTimeout = 30 * 1000;

const deleteBatch = async (batchId) => {
    try {
        await db.deleteQueryBuilder("BatchChanges", "bch_batid", batchId);

        await db.deleteQueryBuilder("BatchDetail", "bde_batid", batchId);

        await db.deleteQueryBuilder("BatchNum", "bnu_batid", batchId);

        await db.deleteQueryBuilder("BatchUser", "bus_batid", batchId);

        await db.deleteQueryBuilder("Batch", "bat_linkbatchid", batchId);

        await db.deleteQueryBuilder("Batch", "bat_batid", batchId);
    } catch (error) {
        console.log("\x1b[33m%s\x1b[0m", `\nNOTE: Temp Batch was not deleted after test: ${error}`);
    }
};

// NOTE: Multiple Before hooks are executed in the order that they are defined.

Before({ tags: "@deactivateTestItem", timeout: 150000 }, async () => {
    const session = vars.sessionId;
    const itemId = vars.expiredAllowanceItem.iteid;

    await soap.deactivateItem(session, itemId);

    await soap.getItemDataUntilMatching({
        upc: vars.expiredAllowanceItem.upc,
        column: "ite_activeitem",
        expectedValue: "false",
    });
});

Before({ timeout: defaultTimeout }, async () => {
    await driver.init(config);
    globalThis.db = db.connect();
});

Before({ tags: "@waitForIdleTimeout500" }, async () => {
    await driver.updateSettings({ waitForIdleTimeout: 500 });
});

// NOTE: Multiple After hooks are executed in the reverse order that they are defined.

After({ timeout: 50000 }, async () => {
    globalThis.db.destroy();
    await driver.quit();
});

After({ tags: "@deleteTempBatch" }, async () => {
    await deleteBatch(globalThis.futureBatchId);
    await deleteBatch(globalThis.newBatchId);
});

After({ tags: "@zeroReturnCode" }, async () => {
    await db.updateWhereQueryBuilder("Item", "ite_rcoid", 0, "ite_rcoid", 89);
    await db.deleteQueryBuilder("ReturnCode", "rco_rcoid", 0);
});
