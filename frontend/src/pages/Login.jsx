import React from "react";
import "./Login.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { asyncloginuser, asynclogoutuser } from "../store/actions/userActions";

const Login = () => {
  const user1 = useSelector((state) => state.userReducer.users);

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { register, reset, handleSubmit } = useForm();
  const submitHandler = (user) => {
    console.log(user);
    dispatch(asyncloginuser(user));
    navigate("/products");

    reset();
  };
  const LogoutHandler = (user) => {
    dispatch(asynclogoutuser(user));
    navigate("/");
  };
  const signup = () => {
    navigate("/register");
  };
  return (
    <div className="container">
      <div className="loginForm">
        <form onSubmit={handleSubmit(submitHandler)}>
          <img
            src="https://i.pinimg.com/736x/4b/2f/0d/4b2f0d22d18cab030f82e946d4fde8bd.jpg"
            alt=""
          />
          <input
            type="email"
            placeholder="Enter your email "
            {...register("email")}
          />
          <input
            type="password"
            placeholder="Enter your passord"
            {...register("password")}
          />
          <button>Sign In</button>

          <p>
            Dont have an account! <span onClick={signup}>Sign up</span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
