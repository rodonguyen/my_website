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

import CodeForm from "../components/CodeForm";
import * as AWS from "aws-sdk";

AWS.config.update({
  region: "ap-southeast-2",
  secretAccessKey: "BIiPJYN4HsUbSnJgl8iH5cP/77iJcpI/BxwUjdM5",
  accessKeyId: "AKIAWHF2UCZI4VX5ILGM",
});

const docClient = new AWS.DynamoDB.DocumentClient();
// const tableName = "datemecodes";
const tableName = "cooler-date-2";


// Read data on Dynamo
const queryDynamoDB = async (username, code) => {
  const params = {
    TableName: tableName,
    Key: {
      username: username,
      code: code,
    }
  };
  return await docClient.get(params).promise();
};

const writeDynamoDB = (username, code) => {
  const params = {
    TableName: tableName,
    Item: {
      code: code,
      username: username,
    },
  };
  
  docClient.put(params, function (err, data) {
    if (err) {
      console.log("Error", err);
    } 
    // else {
    //   console.log("Success", data);
    // }
  });
};

const handleRequestDynamoDB = (username, code) => {
  queryDynamoDB(username, code)
  .then((data) => 
    {
      if (data.Item !== undefined) {
        console.log(`[ DUPLICATE ] This item (${username},${code}) exists. Nothing else to do. Please enter a different code/username.`)
        return
      }
      console.log('[ INSERT ] Insert new item:', username, code)
      writeDynamoDB(username, code)
    }
  )
}


const Adminn = () => {
  return (
    <>
      {CodeForm({onSubmitFunction: handleRequestDynamoDB})}
      {/* <button onClick={() => addDataToDynamoDB()}> Put </button> */}
    </>
  );
};

export default Adminn;
