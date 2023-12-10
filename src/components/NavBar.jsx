import React from "react";
import myStyles from "./NavBar.module.css";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav>
      <div className={myStyles.container}>
        <h2>Logo</h2>
        <ul>
          <li>
            <Link to={"/"}>Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
