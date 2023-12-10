import React, { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextWrapper = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [token, setToken] = useState("");
  return (
    <AuthContext.Provider
      value={{
        loggedIn: { isLoggedIn, setIsLoggedIn },
        jwtToken: { token, setToken },
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextWrapper;
