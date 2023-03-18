import axios from "axios";

const apiUrl = process.env.REACT_APP_CODE_URL;


export const checkCode = async (code, username = 'rodonguyen', setResponse) => {

  if (code === null || code === "") return false

  const fullUrl = `${apiUrl}check`;
  const data = {
    username: username,
    code: code
  };

  await axios
    .post(fullUrl, data)
    .then((res) => {
      console.log('checkcoderes', res)
      setResponse(res);
    })
    .catch((err) => console.log(err));

};
