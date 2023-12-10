import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Context/AuthContext";

const Login = () => {
  const navigate = useNavigate();

  const { loggedIn, jwtToken } = useContext(AuthContext);
  const handleLogin = () => {
    loggedIn.setIsLoggedIn(true);
    jwtToken.setToken("token");
    navigate("/");
  };
  return (
    <div>
      Login Page
      <button
        onClick={() => {
          handleLogin();
        }}
      >
        Login
      </button>
    </div>
  );
};

export default Login;
