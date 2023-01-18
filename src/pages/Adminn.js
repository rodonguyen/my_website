import CoolerDateForm from "../components/CoolerDateForm";
import * as AWS from "aws-sdk";
import { useState } from "react";

// const tableName = "datemecodes";
const tableName = "cooler-date-2";


// Read data on Dynamo
const queryDynamoDB = async (docClient, username, code) => {
  const params = {
    TableName: tableName,
    Key: {
      username: username,
      code: code,
    }
  };
  return await docClient.get(params).promise();
};

const writeDynamoDB = (docClient, username, code) => {
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

const handleRequestDynamoDB = (secretAccessKey, accessKeyId, username, code, setResultMessage) => {

  AWS.config.update({
    region: "ap-southeast-2",
    secretAccessKey: secretAccessKey,
    accessKeyId: accessKeyId,
  });
  
  const docClient = new AWS.DynamoDB.DocumentClient();
  
  queryDynamoDB(docClient, username, code)
  .then((data) => 
    {
      if (data.Item !== undefined) {
        setResultMessage(`[ DUPLICATE ] This item (${username}, ${code}) exists in the database. Nothing else to do. Please enter a different code/username.`)
        return
      }
      setResultMessage(`[ INSERT ] Insert new item: (${username}, ${code})`);
      writeDynamoDB(docClient, username, code)
    }
  )
}

const Adminn = () => {
  const [resultMessage, setResultMessage] = useState('...')

  return (
    <div className="container">
      {CoolerDateForm({onSubmitFunction: handleRequestDynamoDB, setResultMessage: setResultMessage})}
      <p>{resultMessage}</p>
    </div>
  );
};

export default Adminn;
