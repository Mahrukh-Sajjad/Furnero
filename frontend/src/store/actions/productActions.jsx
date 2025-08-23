import axios from "../../api/axiosconfig";
import { loadproduct } from "../reducers/productSlice";

export const asyncloadproducts = () => async (dispatch, getState) => {
  try {
    const { data } = await axios.get("/products");
    dispatch(loadproduct(data));
  } catch (error) {
    console.log(error);
  }
};

export const asynccreateproducts = (product) => async (dispatch, getState) => {
  try {
    await axios.post("/products", product);
    dispatch(asyncloadproducts());
  } catch (error) {
    console.log(error);
  }
};

export const asyncdeleteproducts = (id) => async (dispatch, getState) => {
  try {
    await axios.delete("/products/" + id);
    dispatch(asyncloadproducts());
  } catch (error) {
    console.log(error);
  }
};
