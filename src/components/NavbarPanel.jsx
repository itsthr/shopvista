import Container from "react-bootstrap/Container";

import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";


const NavbarPanel = () => {
  const cartProuducts=useSelector((state)=>state.cart)
  return (
    <>
      <Navbar expand="lg" bg="light" className="bg-body-tertiary">
        <Container fluid>
          <Navbar.Brand href="#">SHOPVISTA</Navbar.Brand>

          <Nav>
            <Nav.Link to="/" as={Link}>
              Products
            </Nav.Link>
          </Nav>
          <Navbar.Toggle />
          <Navbar.Collapse className="justify-content-end">
            <Navbar.Text>
              <Nav.Link to="/cart" as={Link}>
                My Bag {cartProuducts.length}
              </Nav.Link>
            </Navbar.Text>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
};

export default NavbarPanel;
