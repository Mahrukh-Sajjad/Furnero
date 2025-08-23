import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { useForm } from "react-hook-form";
import { asyncdeleteproducts } from "../store/actions/productActions";
import { asyncupdateuser } from "../store/actions/userActions";

const ProductDetails = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  // console.log(id);
  const {
    productReducer: { products },
    userReducer: { users },
  } = useSelector((state) => state);

  const { register, reset, handleSubmit } = useForm();
  const DeleteHandler = () => {
    dispatch(asyncdeleteproducts(id));
    navigate("/products");
  };

  const product = products?.find((product) => product.id == id);

  return product ? (
    <div className="productDetails">
      <img src={product.image} alt="" className="image" />
      <div className="details">
        <h1 style={{ color: " rgba(128, 73, 5, 1)" }}>{product.title}</h1>
        <h3 style={{ color: "gray" }}> Rs .{product.price}</h3>
        <p>{product.description}</p>

        <div>
          {users && users?.isAdmin ? (
            <>
              {" "}
              <button onClick={DeleteHandler}>Delete Product</button>
            </>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  ) : (
    "Loading..."
  );
};

export default ProductDetails;
