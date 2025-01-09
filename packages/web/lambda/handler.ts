import { DynamoDB } from "aws-sdk";

const dynamoDb = new DynamoDB.DocumentClient();

export const handler = async (event: any) => {
  const { slug } = event.queryStringParameters;

  const params = {
    TableName: "ViewCount",
    Key: { id: slug },
    UpdateExpression: "SET viewCount = if_not_exists(viewCount, :start) + :inc",
    ExpressionAttributeValues: {
      ":inc": 1,
      ":start": 0,
    },
    ReturnValues: "UPDATED_NEW",
  };

  try {
    const result = await dynamoDb.update(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({ viewCount: result.Attributes?.viewCount }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Could not update view count" }),
    };
  }
};