import React from "react";

// Styling
import lightLogo from "../light-logo.png";
import darkLogo from "../dark-logo.png";
import { Nav, ThemeButton, Logo, NavItem } from "../styles";

const NavBar = (props) => {
  return (
    <Nav>
      <Logo to="/">
        <img
          src={props.currentTheme === "light" ? lightLogo : darkLogo}
          alt="logo"
        />
      </Logo>
      <div>
        <NavItem to="/cookies">Cookies</NavItem>
        <ThemeButton onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </Nav>
  );
};

export default NavBar;
