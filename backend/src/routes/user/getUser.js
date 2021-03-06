import handler from "./../../../libs/handler-lib";
import dynamoDb from "./../../../libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const params = {
    TableName: "user",
    // 'Key' defines the partition key and sort key of the item to be retrieved
    Key: {
      user_id: event.requestContext.identity.cognitoIdentityId, // The id of the author
    },
  };

  const result = await dynamoDb.get(params);
  if (!result.Item) {
    throw new Error("Item not found.");
  }

  // Return the retrieved item
  return result.Item;
});