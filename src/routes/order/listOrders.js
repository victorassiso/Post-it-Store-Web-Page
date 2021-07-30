import handler from "./../../../libs/handler-lib";
import dynamoDb from "./../../../libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const params = {
    TableName: "order",
    // 'KeyConditionExpression' defines the condition for the query
    // - 'userId = :userId': only return items with matching 'userId'
    //   partition key
    KeyConditionExpression: "user_id = :user_id",
    // 'ExpressionAttributeValues' defines the value in the condition
    // - ':userId': defines 'userId' to be the id of the author
    ExpressionAttributeValues: {
      ":user_id": event.pathParameters.user_id,
    },
  };

  const result = await dynamoDb.query(params);

  // Return the matching list of items in response body
  return result.Items;
});