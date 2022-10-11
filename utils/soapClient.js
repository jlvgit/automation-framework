"use strict";

const { promisify } = require("util");
const soap = require("soap");
const url = "http://8718s1/webservices/WIRELESSH2/ItemInfo.asmx?wsdl";

const createClient = () => {
    return promisify(soap.createClient)(url);
};

const callEndPoint = async (method, args) => {
    const client = await createClient();
    const result = await promisify(client[method])(args, { time: true });

    return result;
};

module.exports = { callEndPoint };
