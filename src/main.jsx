import React, { createContext, useContext, useState } from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import AuthContextWrapper from "./Context/AuthContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthContextWrapper>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </AuthContextWrapper>
  </React.StrictMode>
);
