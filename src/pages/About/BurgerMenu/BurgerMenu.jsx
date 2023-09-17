import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./BurgerMenu.css";
import { Link } from "react-scroll";

const BurgerMenu = () => {
  return (
    <Menu>
      <Link className="menu-item" to="home">
        Home
      </Link>
      <Link className="menu-item" to="about">
        About
      </Link>
      <Link className="menu-item" to="skills">
        Skills
      </Link>
      <Link className="menu-item" to="portofolio">
        Portofolio
      </Link>
      <Link className="menu-item" to="feedback">
        Testimonials
      </Link>
      <Link className="menu-item" to="contact">
        Contact
      </Link>
    </Menu>
  );
};

export default BurgerMenu;
