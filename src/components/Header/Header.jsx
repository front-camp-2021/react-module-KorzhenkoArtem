import React from "react";
import Logo from "../../img/logo.png";

const Header = () => {
  return (
    <header className="header">
      <img src={Logo} alt="logo" />
      <h1>Online Store</h1>
    </header>
  );
};

export default Header;
