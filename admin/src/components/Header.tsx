// import React from "react";
import { Navbar, Button, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { userLogout } from "./NetFunctions";

const Header = () => {
  return (
    <Navbar bg="light" expand="lg" className="p-3">
      <Navbar.Brand>
        <Link to={localStorage.getItem("secret") !== null ? `/message` : `/`}>
          <Button variant="secondary">Home</Button>
        </Link>
      </Navbar.Brand>
      <Nav className="ms-auto">
        {localStorage.getItem("secret") && (
          <Button onClick={userLogout} variant="secondary">
            Logout
          </Button>
        )}
      </Nav>
    </Navbar>
  );
};

export default Header;
