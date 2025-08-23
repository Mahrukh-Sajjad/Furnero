import React from "react";
import logo from "../images/Furlogo.png";
import { Link } from "react-router-dom";
import "./Nav.css";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { asynclogoutuser } from "../store/actions/userActions";

const Nav = () => {
  const user = useSelector((state) => state.userReducer.users);

  const dispatch = useDispatch();
  const signoutHandler = (user1) => {
    dispatch(asynclogoutuser(user1));
  };

  return (
    <div className="container-Nav">
      <div className="logo">
        <img src={logo} alt="" style={{ height: "50px", width: "50px" }} />
        <h2>Furniro</h2>
      </div>
      <div className="links">
        <Link className="link" to="/">
          Home
        </Link>
        {!user ? (
          <>
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                marginRight: "20px",
                fontSize: "15px",
              }}
            >
              Login
            </Link>
          </>
        ) : (
          <>
            {user?.isAdmin && (
              <>
                <Link
                  to="/createProduct"
                  style={{
                    textDecoration: "none",
                    fontSize: "15px",
                    marginRight: "20px",
                  }}
                >
                  Create Product
                </Link>
              </>
            )}

            <>
              <button
                style={{
                  background: "none",
                  border: "none",
                  marginRight: "20px",
                  color: "purple",
                }}
                onClick={() => {
                  signoutHandler(user);
                }}
              >
                Logout
              </button>
            </>
          </>
        )}

        {/* {user && user?.isAdmin ? (
          <>
            <Link
              to="/createProduct"
              style={{
                textDecoration: "none",
                fontSize: "15px",
                marginRight: "20px",
              }}
            >
              Create Product
            </Link>
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                fontSize: "15px",
                marginRight: "20px",
              }}
            >
              {" "}
              Login
            </Link>
          </>
        ) : (
          <>
            <Link
              to="/login"
              style={{
                textDecoration: "none",
                fontSize: "15px",
                marginRight: "20px",
              }}
            >
              {" "}
              Login
            </Link>
          </>
        )} */}
        <Link className="link" to="/products">
          Products
        </Link>
      </div>
    </div>
  );
};

export default Nav;
