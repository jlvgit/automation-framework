const soap = require("../../utils/soapClient");
const dateFormat = require("dateformat");
const { retryUntilTrue } = require("../../utils/retry");

const now = new Date();

// Default subvendor, sve_id 2, is HV PRODUCE
const newOrder = async (locId = 2, sveId = 2) => {
    return soap.callEndPoint("NewOrder", {
        strAFS: dateFormat(now, "m-d-yyyy 00:00:00"),
        strDelDate: dateFormat(now, "m-d-yyyy 00:00:00"),
        intLocation: locId,
        intSveID: sveId,
    });
};

const getOrders = async (locId = 2) => {
    return soap.callEndPoint("GetOrders", {
        intLocation: locId,
    });
};

const deactivateItem = async (intSessionID, intItemID) => {
    return soap.callEndPoint("RemoveFromSectionOrDelete", {
        intSessionID,
        intItemID,
        strType: "D",
    });
};

const getItemData = async (strUPC, intLocation = 2) => {
    return soap.callEndPoint("GetItemData", {
        intLocation,
        strUPC,
    });
};

const getItemDataUntilMatching = ({
    upc,
    column,
    expectedValue,
    attempts = 15,
    interval = 10000,
}) => {
    return retryUntilTrue(`Checking active status of ${upc}`, attempts, interval, async () => {
        const response = await getItemData(upc);

        const itemData = response.GetItemDataResult.diffgram.NewDataSet.Table;

        const columnData = itemData[column];

        console.log(`Expecting: ${expectedValue}, Got: ${columnData}`);

        return columnData === expectedValue ? response : false;
    });
};

const loadItemVerification = async (strUPC, intBatchID, intLocationID = 2) => {
    return soap.callEndPoint("LoadItemVerification", {
        intLocationID,
        strUPC,
        intBatchID,
    });
};

module.exports = {
    newOrder,
    getOrders,
    getItemData,
    getItemDataUntilMatching,
    deactivateItem,
    loadItemVerification,
};
