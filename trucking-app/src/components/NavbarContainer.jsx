import React from 'react';
import { HashLink as HLink } from 'react-router-hash-link';
import { Route, Switch } from 'react-router-dom';
import { Navbar, Nav, Image } from 'react-bootstrap';
import Landing from '../pages/Landing.jsx'
import Logo from "../images/logo.jpg";

const NavbarContainer = () => {

  return (
    <>
      <Navbar sticky="top" bg="light" variant="light" expand="md" collapseOnSelect>
        <Image src={Logo} roundedCircle height="10vh"/>
        <Navbar.Brand className="mr-auto logo-nav">&ensp;D&D Bros Trucking</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mx-auto">
            <Nav.Link as={HLink} to="/#intro">Home</Nav.Link>
            <Nav.Link as={HLink} to="/#about">About Us</Nav.Link>
            <Nav.Link as={HLink} to="/#service">Services</Nav.Link>
            <Nav.Link as={HLink} to="/#testimonials">Testimonials</Nav.Link>
            <Nav.Link as={HLink} to="/#contact">Contact Us</Nav.Link>
            {/* links aren't navigating to the right page/section */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Landing} />
      </Switch>
    </>
  )
};

export default NavbarContainer;