import handler from "./../../../libs/handler-lib";
import dynamoDb from "./../../../libs/dynamodb-lib";

export const main = handler(async (event, context) => {
  const params = {
    TableName: "product",
    Key: {
        categorie_id: event.pathParameters.categorie_id,
        product_id: event.pathParameters.product_id
    },
  };
  console.log(event.pathParameters.product_id);
  const result = await dynamoDb.get(params);
  if (!result.Item) {
    throw new Error("Item not found.");
  }

  return result.Item;
});