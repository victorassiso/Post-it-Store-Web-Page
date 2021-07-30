import * as uuid from "uuid";
import handler from "./../../libs/handler-lib";
import dynamoDb from "./../../libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const data = JSON.parse(event.body);
  const params = {
    TableName: process.env.tableName,
    Item: {
      // The attributes of the item to be created
      user_id: uuid.v1(), // The id of the author
      name: data.name, // A unique uuid
      email: data.email, // Parsed from request body
    },
  };

  await dynamoDb.put(params);

  return params.Item;
});