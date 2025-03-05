
import { DYNAMODB_VIEW_COUNT_TABLE_NAME } from "@/constant/general";
import { DynamoDB } from "aws-sdk";

const dynamoDb = new DynamoDB.DocumentClient();

interface IEvent {
  pathParameters: {
    slug: string;
  };
}

export const getViewCount = async (event: IEvent) => {
  if (!event.pathParameters || !event.pathParameters.slug) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing required parameter: slug" }),
    };
  }
  const { slug } = event.pathParameters;

  const params = {
    TableName: DYNAMODB_VIEW_COUNT_TABLE_NAME,
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

export const incrementViewCount = async (event: IEvent) => {
  const slug = event.pathParameters?.slug;

  if (!slug) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing required parameter: slug" }),
    };
  }


  const params = {
    TableName: DYNAMODB_VIEW_COUNT_TABLE_NAME,
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

export const getAllViewCount = async () => {
  const params = {
    TableName: DYNAMODB_VIEW_COUNT_TABLE_NAME,
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

