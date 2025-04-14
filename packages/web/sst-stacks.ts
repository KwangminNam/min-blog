import { Stack } from "aws-cdk-lib/core";

import { NextjsSite, Function, Api, Table } from "sst/constructs";

export const dynamoViewCountTable = (stack: Stack) => {
  const table = new Table(stack, "ViewCount", {
    fields: {
      id: "string",
    },
    primaryIndex: { partitionKey: "id" },
  });

  return table;
};


const viewCountLambdaHandler = (stack: Stack) => {
  const table = dynamoViewCountTable(stack);

  const updateViewCountFunction = new Function(stack, "UpdateViewCountFunction", {
    handler: "lambda/handler.incrementViewCount",
    environment: {
      TABLE_NAME: table.tableName,
    },
    permissions: [
      "dynamodb:PutItem",
      "dynamodb:UpdateItem"
    ]
  });
  const getViewCountFunction = new Function(stack, "GetViewCountFunction", {
    handler: "lambda/handler.getViewCount",
    environment: {
      TABLE_NAME: table.tableName,
    },
    permissions: ["dynamodb:GetItem"]
  });


  const getAllViewCountFunction = new Function(stack, "GetAllViewCountFunction", {
    handler: "lambda/handler.getAllViewCount",
    environment: {
      TABLE_NAME: table.tableName,
    },
    permissions: ["dynamodb:GetItem"]
  });

  return { updateViewCountFunction, getViewCountFunction, getAllViewCountFunction };
};




export const viewCountAPIGateway = (stack: Stack) => {
  const { updateViewCountFunction, getViewCountFunction, getAllViewCountFunction } = viewCountLambdaHandler(stack);

  const api = new Api(stack, "Api", {
    cors: {
      allowMethods: ["GET", "POST"],
      allowOrigins: ["https://kwangmin-nam.com", "https://www.kwangmin-nam.com"]
    },
    routes: {
      "POST /view-count/{slug}": updateViewCountFunction,
      "GET /view-count/{slug}": getViewCountFunction,
      "GET /view-count": getAllViewCountFunction,
    },
  });

  return api;
}
