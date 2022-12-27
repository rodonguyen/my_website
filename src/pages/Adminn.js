import CodeForm from "../components/CodeForm";
import * as AWS from "aws-sdk";

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

const handleRequestDynamoDB = (secretAccessKey, accessKeyId, username, code) => {
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
        console.log(`[ DUPLICATE ] This item (${username},${code}) exists in the database. Nothing else to do. Please enter a different code/username.`)
        return
      }
      console.log('[ INSERT ] Insert new item:', username, code)
      writeDynamoDB(docClient, username, code)
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
