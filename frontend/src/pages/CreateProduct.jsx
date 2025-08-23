import React from "react";
import "./CreateProduct.css";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { asynccreateproducts } from "../store/actions/productActions";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const CreateProductHandler = (product) => {
    product.id = nanoid();
    console.log(product);
    dispatch(asynccreateproducts(product));
    navigate("/products");
  };
  return (
    <div className="createProduct">
      <form onSubmit={handleSubmit(CreateProductHandler)}>
        <img
          src="https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=658&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="form-container">
          <div style={{ position: "relative" }}>
            <input
              type="url"
              placeholder="Enter Url"
              {...register("image", {
                required: "Image url is required",
                validate: (value) => {
                  try {
                    new URL(value);
                    return true;
                  } catch (error) {
                    return "Plz enter a valid url";
                  }
                },
              })}
            />
            {errors.image && (
              <span
                style={{
                  position: "absolute",

                  fontSize: "14px",
                  left: "0px",

                  bottom: "-18px",
                }}
                className="error"
              >
                {errors.image.message}
              </span>
            )}
          </div>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Title"
              {...register("title", { required: "Title is required" })}
            />
            {errors.title && (
              <span
                className="error"
                style={{
                  position: "absolute",

                  fontSize: "14px",
                  left: "0px",

                  bottom: "-18px",
                }}
              >
                {errors.title.message}
              </span>
            )}
          </div>
          <div style={{ position: "relative" }}>
            <input
              type="number"
              placeholder="Price"
              {...register("price", {
                required: "Plz Enter Price",
                validate: (value) =>
                  parseInt(value) > 0 || "Price must be greater than zero",
              })}
            />
            {errors.price && (
              <span
                className="error"
                style={{
                  position: "absolute",

                  fontSize: "14px",
                  left: "0px",

                  bottom: "-18px",
                }}
              >
                {errors.price.message}
              </span>
            )}
          </div>

          <div style={{ position: "relative" }}>
            <textarea
              placeholder="Enter Description..."
              {...register("description", {
                required: "Description is required",
              })}
            />
            {errors.description && (
              <span
                className="error"
                style={{
                  position: "absolute",

                  fontSize: "14px",
                  left: "0px",

                  bottom: "-18px",
                }}
              >
                {errors.description.message}
              </span>
            )}
          </div>
          <div style={{ position: "relative" }}>
            <input
              type="text"
              placeholder="Category"
              {...register("category", { required: "Category is required" })}
            />
            {errors.category && (
              <span
                className="error"
                style={{
                  position: "absolute",

                  fontSize: "14px",
                  left: "0px",

                  bottom: "-18px",
                }}
              >
                {errors.category.message}
              </span>
            )}
          </div>

          <button>Create Product</button>
        </div>
      </form>
    </div>
  );
};

export default CreateProduct;
