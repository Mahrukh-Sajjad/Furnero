import React from "react";
import "./Register.css";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { nanoid } from "nanoid";
import { useDispatch } from "react-redux";
import { asyncregisteruser } from "../store/actions/userActions";
const Register = () => {
  const navigate = useNavigate();
  const { register, reset, handleSubmit } = useForm();
  const dispatch = useDispatch();

  const submitHandler = (user) => {
    user.id = nanoid();

    console.log(user);
    dispatch(asyncregisteruser(user));
    navigate("/login");
    reset();
  };

  const signin = () => {
    navigate("/login");
  };
  return (
    <div>
      <div className="container1">
        <div className="loginForm">
          <form onSubmit={handleSubmit(submitHandler)}>
            <img
              src="https://i.pinimg.com/736x/4b/2f/0d/4b2f0d22d18cab030f82e946d4fde8bd.jpg"
              alt=""
            />
            <input
              type="text"
              placeholder="Enter Username"
              {...register("username")}
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
            <button>Sign Up</button>
            <p>
              Already have an account! <span onClick={signin}>Sign in</span>
            </p>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
