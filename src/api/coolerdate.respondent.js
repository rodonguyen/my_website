import axios from "axios";

const apiUrl = process.env.REACT_APP_RESPONDENT;


export const addRespondentFormToDatabase = async (event) => {
   event.preventDefault();
   
   console.log(event.target.ifact.value);




//   if (profile === null || username === null) return false

//   const fullUrl = `${apiUrl}find`;
//   const data = {
//     username: username,
//     profile: profile
//   };

//   const response = await axios
//     .post(fullUrl, data)
//     .then((res) => {
//       // console.log(res)
//       return res
//     })
//     .catch((err) => console.log(err));

//   setResponse(response);
};

