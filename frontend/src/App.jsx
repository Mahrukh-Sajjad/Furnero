import React, { useEffect } from "react";
import axios from "./api/axiosconfig";
import Mainroutes from "./routes/Mainroutes";
import { asynccurrentuser } from "./store/actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { asyncloadproducts } from "./store/actions/productActions";

const App = () => {
  const dispatch = useDispatch();
  const { users } = useSelector((state) => state.userReducer);
  const { products } = useSelector((state) => state.productReducer);
  useEffect(() => {
    !users && dispatch(asynccurrentuser());
  }, []);
  useEffect(() => {
    dispatch(asyncloadproducts());
  }, [products]);
  return (
    <div>
      <Mainroutes />
    </div>
  );
};

export default App;
