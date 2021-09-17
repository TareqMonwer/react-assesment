import axios from "axios";
import data from "assets/data/users.json";
import { USERS } from "utils/api/endpoints";
const users = data.users;

export const emailBlankOrExists = (email) => {
  let errFlag = false; // by default, email is valid.
  const existingUsers = users.filter((user) => user.email === email);
  if (existingUsers.length > 0) {
    errFlag = "Email already exists!";
  } else if (!email) {
    errFlag = "Email can't be left blank!";
  } else {
    // email is not blank neither exists in db.
    return false;
  }
  return errFlag;
};

export const validateEachFields = (fieldsArray) => {
  let result = fieldsArray.every((field) => {
    if (!field) {
      return false
    }
    return true
  });
  return result;
}

export const storeUserData = (userObj, setEmailErr) => {
  const userData = { ...userObj, id: Date.now() };
  return axios
    .post(USERS, userData)
    .then((res) => console.log(res))
    .catch((err) => console.log(err));
};
