// import { DynamoDBClient, PutItemCommand } from "@aws-sdk/client-dynamodb";
// import {
//   PutCommand,
//   GetCommand,
//   UpdateCommand,
//   BatchWriteCommand,
//   DeleteCommand,
//   ScanCommand,
//   QueryCommand,
// } from "@aws-sdk/lib-dynamodb";
// const ddbClient = new DynamoDBClient();

import * as AWS from "aws-sdk";

AWS.config.update({
  region: "ap-southeast-2",
  secretAccessKey: "BIiPJYN4HsUbSnJgl8iH5cP/77iJcpI/BxwUjdM5",
  accessKeyId: "AKIAWHF2UCZI4VX5ILGM",
});

const docClient = new AWS.DynamoDB.DocumentClient();
const tableName = "datemecodes";

const addDataToDynamoDB = () => {
  const params = {
    TableName: tableName,
    Item: {
      code: "yourebeautiful",
    },
  };

  docClient.put(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } else {
      console.log("Success", data);
    }
  });
};

const Adminn = () => {
  return (
    <>
      <button onClick={() => addDataToDynamoDB()}> Put </button>
    </>
  );
};

export default Adminn;
