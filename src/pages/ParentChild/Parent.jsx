import React from "react";

const Parent = ({ children }) => {
  return (
    <div
      style={{
        width: "300px",
        height: "300px",
        background: "red",
        color: "white",
        textAlign: "center",
        margin: "2rem auto",
        fontSize: "2rem",
      }}
    >
      Parent
      {children}
    </div>
  );
};

export default Parent;
