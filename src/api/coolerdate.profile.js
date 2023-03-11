import axios from "axios";

const apiUrl = process.env.REACT_APP_PROFILE_URL;


export const getProfile = async (username = 'rodonguyen', profile = null) => {

  if (profile === null || username === null) return false

  const fullUrl = `${apiUrl}find`;
  const data = {
    username: username,
    profile: profile
  };

  const response = await axios
    .post(fullUrl, data)
    .then((res) => {
      console.log(res)
      return res
    })
    .catch((err) => console.log(err));

  return response
};
