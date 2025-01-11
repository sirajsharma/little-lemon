import { NavLink } from "react-router-dom";

import Navigation from "./Navigation";
import MobileNav from "./MobileNav";

import Logo from "../assets/logo.jpg";

import "./styles/HeaderElement.css";

const Navbar = () => {
  return (
    <div className="header">
      <div className="header-wrapper">
        <div className="image-wrapper">
          <NavLink to="/">
            {<img className="logo-img" src={Logo} alt="Little Lemon logo" />}
          </NavLink>
        </div>
        <Navigation />
        <MobileNav />
      </div>
    </div>
  );
};

export default Navbar;
