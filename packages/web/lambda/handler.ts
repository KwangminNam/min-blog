import { DynamoDB } from "aws-sdk";

const dynamoDb = new DynamoDB.DocumentClient();

export const getViewCount = async (event: any) => {
  console.log(event, "event!!")
  if (!event.pathParameters || !event.pathParameters.slug) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing required parameter: slug" }),
    };
  }
  const { slug } = event.pathParameters;

  const params = {
    TableName: "production-web-ViewCount",
    Key: { id: slug }
  };

  try {
    const result = await dynamoDb.get(params).promise();
    return {
      statusCode: 200,
      body: JSON.stringify({
        viewCount: result.Item?.viewCount || 0
      }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Could not get view count" }),
    };
  }
};

// {
//   "routeKey":"GET /view-count/{slug}",
//   "queryStringParameters":{
//     "slug":"hello-react"
//   }
// }

export const handler = async (event: any) => {
  console.log(event, "event!!");

  // URL 패턴: /posts/{slug}/view-count
  const slug = event.pathParameters?.slug;

  if (!slug) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing required parameter: slug" }),
    };
  }


  const params = {
    TableName: "production-web-ViewCount",
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