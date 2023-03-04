import axios from "axios";

const apiUrl = process.env.REACT_APP_CODE_API;


export const checkCode = async (code, username = 'rodonguyen') => {

  if (code === null || code === "") return false

  const fullUrl = `${apiUrl}check`;
  const data = {
    username: username,
    code: code
  };

  const response = await axios
    .post(fullUrl, data)
    .then((res) => {
      // console.log(res)
      return res
    })
    .catch((err) => console.log(err));

  return response
};
