import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import productImg from "../images/productimg.png";
import "./Product.css";
import { useNavigate } from "react-router-dom";
import axios from "../api/axiosconfig";

const Products = () => {
  const products = useSelector((state) => state.productReducer.products);

  const navigate = useNavigate();
  const handleClick = (id) => {
    navigate(`/product/${id}`);
  };

  const fetchProducts = async () => {
    const { data } = await axios.get(`/products`);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const renderProducts = products.map((product) => {
    return (
      <div key={product.id} className="product">
        <img src={product.image} alt="" />
        <div className="info">
          <h3>{product.title}</h3>
          <p> Rs .{product.price}</p>
          <button
            onClick={() => {
              handleClick(product.id);
            }}
          >
            More Info
          </button>
        </div>
      </div>
    );
  });

  return (
    <div className="productContainer">
      <img src={productImg} alt="" />
      <div className="banner">
        <h1>We Serve Quality</h1>
      </div>
      <div
        className="products"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)",
          paddingLeft: "100px",
          marginTop: "60px",
          marginBottom: "40px",
        }}
      >
        {renderProducts}
      </div>
    </div>
  );
};

export default Products;
