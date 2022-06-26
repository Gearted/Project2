import React from "react";
import Nav from "./Nav";
import logo from "../assets/logo.png";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <img className="logo" src={logo} alt="" />
      </div>
      <div>
        <Nav />
      </div>
    </div>
  );
}

export default Header;
