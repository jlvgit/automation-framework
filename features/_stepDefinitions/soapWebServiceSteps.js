const { Given } = require("@cucumber/cucumber");
const { expect } = require("chai");

const soap = require("../../objects/helpers/soapWebService");

Given("a new order for vendor ID {int} is created", async (int) => {
    const newOrder = await soap.newOrder(2, int);

    const orderList = await soap.getOrders();

    const order = orderList.GetOrdersResult.diffgram.NewDataSet.Orders.find(
        (orderDetails) => {
            return orderDetails.ord_id === String(newOrder.NewOrderResult);
        }
    );

    globalThis.newOrder = `${order.po_num} - ${order.sve_descrip}`;

    expect(globalThis.newOrder).to.not.be.null;
});
