import { nanoid } from "nanoid";
import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { asynccreateproducts } from "../../store/actions/productActions";
const CreateProduct = () => {
  const { register, reset, handleSubmit } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const CreateProductHandler = (product) => {
    product.id = nanoid();
    console.log(product);
    navigate("/products");

    dispatch(asynccreateproducts(product));
  };
  return (
    <form onSubmit={handleSubmit(CreateProductHandler)}>
      <input type="url" placeholder="Image url" {...register("image")} />
      <input type="text" placeholder="Title" {...register("title")} />
      <input type="number" placeholder="Price" {...register("price")} />
      <textarea
        placeholder="Enter Description..."
        {...register("description")}
      />
      <input type="text" placeholder="Category" {...register("cateogory")} />
      <button>Create Product</button>
    </form>
  );
};

export default CreateProduct;
