import React from "react";
import Nav from "../Nav/Nav";
import logo from "../assets/N-Fond-Noir.gif";
import "./Header.css"

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
