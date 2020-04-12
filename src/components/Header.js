import React, { useState } from "react";
//import { NavLink } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavLink,
  NavItem,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from "reactstrap";

const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  return (
    <div className="navStyle">
      <Navbar color="light" light expand="lg">
        <NavbarBrand href="/">
          <img
            className="imageStyle"
            src="https://www.cavobuilderssupplies.com/wp-content/uploads/2013/10/Oatey-logo.jpg"
          />
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink href="/temperature">Temperature</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/pressure">Pressure</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="/team">About</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Header;
