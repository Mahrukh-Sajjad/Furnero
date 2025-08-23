import axios from "../../api/axiosconfig";
import { loaduser } from "../reducers/userSlice";
import { removeuser } from "../reducers/userSlice";

export const asynccurrentuser = () => async (dispatch, getState) => {
  try {
    const user = JSON.parse(localStorage.getItem("user"));
    if (user) {
      dispatch(loaduser(user));
      console.log("Fetched from local storage", user);
    } else console.log("User not loged in");
  } catch (error) {
    console.log(error);
  }
};

export const asynclogoutuser = (user) => async (dispatch, getState) => {
  try {
    localStorage.removeItem("user");
    dispatch(removeuser(user));
    console.log("user logout");
  } catch (error) {
    console.log(error);
  }
};

export const asyncloginuser = (user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(
      `users?email=${user.email}&password=${user.password}`
    );

    console.log(data[0]);
    dispatch(loaduser(data[0]));

    localStorage.setItem("user", JSON.stringify(data[0]));
  } catch (error) {
    console.log(error);
  }
};

export const asyncregisteruser = (user) => async (dispatch, getState) => {
  try {
    const res = await axios.post("/users", user);
  } catch (error) {
    console.log(error);
  }
};

export const asyncupdateuser = (id, user) => async (dispatch, getState) => {
  try {
    const { data } = await axios.patch("/users/" + id, user);
    localStorage.setItem("user", JSON.stringify(data));
    dispatch(asynccurrentuser());
  } catch (error) {
    console.log(error);
  }
};
