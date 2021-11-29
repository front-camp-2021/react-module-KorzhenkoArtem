import React from "react";
import Logo from "../../img/logo.png";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="header">
      <Link to="/">
        <img src={Logo} alt="logo" />
        <h1>Online Store</h1>
      </Link>
    </header>
  );
};

export default Header;
