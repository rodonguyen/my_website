import axios from "axios";

const apiUrl = process.env.REACT_APP_RESPONDENT_URL;

export const addRespondentFormToDatabase = async (
  username,
  code,
  event,
  setFirst3SectionsFilled
) => {
  event.preventDefault();

  console.log("Clicked send");

  if (
    event.target.name.value === "" ||
    event.target.contact.value === "" ||
    event.target.bio.value === ""
  ) {
    setFirst3SectionsFilled(false);
    return false;
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

  await axios
    .post(fullUrl, data)
    .then(() => {
      console.log("Add respondent successfully");
      return true;
    })
    .catch((err) => {
      console.log("Error", err);
      return false;
    });
};
