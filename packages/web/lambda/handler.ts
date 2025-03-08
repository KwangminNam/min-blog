import { DYNAMODB_VIEW_COUNT_TABLE_NAME } from "@/constant/general";
import { DynamoDB } from "aws-sdk";
interface IEvent {
  pathParameters: {
    slug: string;
  };
}

interface IViewCountResponse {
  statusCode: number;
  body: string;
  headers?: {
    [key: string]: string;
  };
}

const dynamoDb = new DynamoDB.DocumentClient();

const createErrorResponse = (statusCode: number, message: string): IViewCountResponse => {
  return {
    statusCode,
    body: JSON.stringify({ error: message }),
  };
};

const createSuccessResponse = <T>(data: T, headers?: { [key: string]: string }): IViewCountResponse => {
  return {
    statusCode: 200,
    body: JSON.stringify(data),
    ...(headers && { headers }),
  };
};
export const getViewCount = async (event: IEvent): Promise<IViewCountResponse> => {
  if (!event.pathParameters || !event.pathParameters.slug) {
    return createErrorResponse(400, "Missing required parameter: slug");
  }
  
  const { slug } = event.pathParameters;
  const params = {
    TableName: DYNAMODB_VIEW_COUNT_TABLE_NAME,
    Key: { id: slug }
  };

  try {
    const result = await dynamoDb.get(params).promise();
    return createSuccessResponse({ viewCount: result.Item?.viewCount || 0 });
  } catch (error) {
    console.error(error);
    return createErrorResponse(500, "Could not get view count");
  }
};

export const incrementViewCount = async (event: IEvent): Promise<IViewCountResponse> => {
  const slug = event.pathParameters?.slug;
  
  if (!slug) {
    return createErrorResponse(400, "Missing required parameter: slug");
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
    return createSuccessResponse({ viewCount: result.Attributes?.viewCount });
  } catch (error) {
    console.error(error);
    return createErrorResponse(500, "Could not update view count");
  }
};

export const getAllViewCount = async (): Promise<IViewCountResponse> => {
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

    return createSuccessResponse(
      { viewCounts, total: viewCounts.length },
      {
        "Content-Type": "application/json",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "GET"
      }
    );
  } catch (error) {
    console.error(error);
    return createErrorResponse(500, "Could not get all view counts");
  }
};
