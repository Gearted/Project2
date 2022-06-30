import React from "react";
import Nav from "./Nav";
import logo from "../assets/N-Fond-Noir.gif";

function Header() {
  return (
    <div className="header">
      <div>
        <img className="logo" src={logo} alt="" />
      </div>
      <Nav />
    </div>
  );
}

export default Header;
