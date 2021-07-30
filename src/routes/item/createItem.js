import * as uuid from "uuid";
import handler from "./../../../libs/handler-lib";
import dynamoDb from "./../../../libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "item",
    Item: {
      // The attributes of the item to be created
      item_id: uuid.v1(), // The id of the author
      order_id: data.order_id,
      product_id: data.product_id,
      quantity: data.quantity,
    },
  };
  await dynamoDb.put(params);

  return params.Item;
});