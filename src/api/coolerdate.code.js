import axios from "axios";

const apiUrl = process.env.REACT_APP_API_URL;

// function checkExpiration(time) {
//   const startTime = new Date(time)
//   const now = Date.now()
//   console(now-startTime)
// }

// export const logFirstAccessTime = async (code, username='rodonguyen') => {}



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
