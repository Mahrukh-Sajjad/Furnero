import { Routes, Route } from "react-router-dom";
import Login from "../pages/Login";
import React from "react";
import Register from "../pages/Register";
import Home from "../pages/Home";
import Products from "../pages/Products";
import Layout from "../Layout";
import CreateProduct from "../pages/CreateProduct";
import ProductDetails from "../pages/ProductDetails";

const Mainroutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/products" element={<Products />} />
        <Route path="/createProduct" element={<CreateProduct />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Route>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  );
};

export default Mainroutes;
