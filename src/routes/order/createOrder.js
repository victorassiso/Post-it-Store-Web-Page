import * as uuid from "uuid";
import handler from "./../../../libs/handler-lib";
import dynamoDb from "./../../../libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: "order",
    Item: {
      // The attributes of the item to be created
      order_id: uuid.v1(), // The id of the author
      date: Date.now(), // A unique uuid
      user_id: data.user_id, // Parsed from request body
    },
  };
  console.log(process.env.tableName);
  await dynamoDb.put(params);

  return params.Item;
});