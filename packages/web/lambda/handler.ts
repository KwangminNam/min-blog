import { DynamoDB } from "aws-sdk";

const dynamoDb = new DynamoDB.DocumentClient();

export const getViewCount = async (event: any) => {
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

export const handler = async (event: any) => {
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

export const getAllViewCount = async (event: any) => {
  const params = {
    TableName: "production-web-ViewCount",
    // ProjectionExpression을 사용하여 필요한 속성만 가져옵니다
    ProjectionExpression: "id, viewCount"
  };

  try {
    const result = await dynamoDb.scan(params).promise();

    const viewCounts = result.Items?.map(item => ({
      slug: item.id,
      viewCount: item.viewCount || 0
    })) || [];

    return {
      statusCode: 200,
      headers: {
        "Content-Type": "application/json",
        // CORS 헤더 추가
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET"
      },
      body: JSON.stringify({
        viewCounts,
        total: viewCounts.length
      }),
    };
  } catch (error) {
    console.error(error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Could not get all view counts" }),
    };
  }
};

