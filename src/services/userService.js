import axios from "axios";
import data from "assets/data/users.json";
import { BASE_URL, USERS } from "utils/api/endpoints";
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

export const storeUserData = (userObj) => {
  const userData = { ...userObj, id: Date.now() };
  return axios
    .post(`${BASE_URL}/users`, userData)
    .then((res) => res)
    .catch((err) => err);
};

export const getRandomUsers = (limit = 20) => {
  return axios
    .get(`https://randomuser.me/api?results=${limit}`)
    .then((res) => {
      return res.data.results;
    })
    .catch((err) => err);
}

export const getJSONServerUsers = () => {
  return axios
    .get(USERS)
    .then((res) => res.data)
    .catch((err) => err);
}

export const userEmailExists = (email) => {
  const existing = users.filter((user) => user.email === email);
  return existing > 0;
};
