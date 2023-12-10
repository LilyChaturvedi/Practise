import React, { useEffect } from "react";

const About = () => {
  useEffect(() => {
    console.log("About Hit");
  });

  return (
    <>
      <div style={{ marginTop: "2rem", color: "black" }}>About</div>;
    </>
  );
};

export default About;
