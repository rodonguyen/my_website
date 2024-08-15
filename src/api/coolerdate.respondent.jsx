import axios from "axios";

// const apiUrl = process.env.REACT_APP_SERVER_RESPONDENT_ENDPOINT;
const apiUrl = '';

export const addRespondentFormToDatabase = async (
  username,
  code,
  event,
  setFirst3SectionsFilled
) => {
  event.preventDefault();

  // Block if required sections are not filled
  if (
    event.target.name.value === "" ||
    event.target.contact.value === "" ||
    event.target.bio.value === ""
  ) {
    setFirst3SectionsFilled(false);
    console.log('First 3 are not all filled.')
    return {successful: false};
  }

  // Use /add to add respondent data
  // Destroy page when received successful response
  const fullUrl = `${apiUrl}add`;
  const data = {
    username: username,
    code: code,
    name: event.target.name.value,
    contact: event.target.contact.value,
    bio: event.target.bio.value,
    ifact: event.target.ifact.value,
    place: event.target.place.value,
    dressing: event.target.dressing.value,
    boyfriend: event.target.boyfriend.value,
  };

  const response = await axios
                  .post(fullUrl, data)
                  .then(() => {
                    console.log("Add respondent successfully.");
                    return {successful: true};
                  })
                  .catch((err) => {
                    console.log("Error", err);
                    return {successful: false};
                  });
  return response;
};
