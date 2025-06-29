
import { Function, Api, Table, Stack, Permissions } from "sst/constructs";



const addAttachPermissionsWithLambda = (permissions: Permissions, functions: Function[]) => {
  return functions.map((fun) => {
    fun.attachPermissions(permissions)
  })
}

export const dynamoViewCountTable = (stack: Stack) => {
  const table = new Table(stack, "ViewCount-v2", {
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
    runtime: "nodejs20.x",
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
    runtime: "nodejs20.x",
    permissions: ["dynamodb:GetItem"]
  });


  const getAllViewCountFunction = new Function(stack, "GetAllViewCountFunction", {
    handler: "lambda/handler.getAllViewCount",
    environment: {
      TABLE_NAME: table.tableName,
    },
    runtime: "nodejs20.x",
    permissions: ["dynamodb:GetItem"]
  });

  addAttachPermissionsWithLambda([table], [updateViewCountFunction, getViewCountFunction, getAllViewCountFunction])


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
    }
  });

  return api;
}
