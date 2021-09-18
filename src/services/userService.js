import axios from "axios";
import firebase from "firebase.conf";

export const getUsers = async () => {
  const db = firebase.firestore();
  const data = await db.collection("users").get();
  const users = data.docs.map((doc) => ({ ...doc.data(), id: doc.id }));
  return users;
};

export const emailInvalidOrExists = async (email) => {
  const users = await getUsers();
  const existingUsers = users.filter((user) => user.email === email);
  return existingUsers.length > 0;
};

export const validateEachFields = (fieldsArray) => {
  let result = fieldsArray.every((field) => {
    if (!field) {
      return false;
    }
    return true;
  });
  return result;
};

export const storeUserData = (userObj) => {
  const userData = { ...userObj };
  const db = firebase.firestore();
  return db.collection("users").add(userData);
};

export const getRandomUsers = (limit = 20) => {
  return axios
    .get(`https://randomuser.me/api?results=${limit}`)
    .then((res) => {
      return res.data.results;
    })
    .catch((err) => err);
};

export const userEmailExists = (email) => {
  getUsers().then((users) => {
    const existing = users.filter((user) => user.email === email);
    return existing > 0;
  });
};
