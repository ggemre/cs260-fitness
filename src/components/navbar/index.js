import React from "react";
import { Nav, NavLink, NavMenu } 
    from "./NavbarElements";
  
const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/plan">
            Workout Plan
          </NavLink>
          <NavLink to="/progress">
            Inspiration
          </NavLink>
        </NavMenu>
      </Nav>
    </>
  );
};
  
export default Navbar;