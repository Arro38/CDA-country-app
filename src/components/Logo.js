import React from "react";
import { NavLink } from "react-router-dom";

const Logo = () => {
  return (
    <NavLink to="/">
      <img src="/assets/imgs/logo192.png" alt="logo" />
    </NavLink>
  );
};

export default Logo;
