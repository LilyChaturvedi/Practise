import React, { useEffect } from "react";

const Home = () => {
  useEffect(() => {
    console.log("Home Page");
  }, []);

  return <div style={{ marginTop: "2rem", color: "black" }}>Home Page</div>;
};

export default Home;
