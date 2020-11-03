import React from 'react';
import { HashLink as HLink } from 'react-router-hash-link';
import { Route, Switch} from 'react-router-dom';
import { Navbar, Nav, Button, } from 'react-bootstrap';
import Landing from '../pages/Landing.jsx'
const NavbarContainer = () => {

    return (
      <>
        <Navbar sticky="top" bg="light" variant="light" className="navbar">
          <Navbar.Brand className="mr-auto logo-nav">D&D Bros Trucking</Navbar.Brand>
          <Nav className="mx-auto">
            <Nav.Link as={HLink} to="/#intro">Home</Nav.Link>
            <Nav.Link as={HLink} to="/#about">Who We Are</Nav.Link>
            <Nav.Link as={HLink} to="/#service">Services</Nav.Link>
            <Nav.Link as={HLink} to="/#testimonials">Testimonials</Nav.Link>
            <Nav.Link as={HLink} to="/#contact">Contact Us</Nav.Link>
            {/* links aren't navigating to the right page/section */}
          </Nav>
        </Navbar>
        <Switch>
            <Route exact path="/" component={Landing}/>
        </Switch>
      </>
    )
  };
  
  export default NavbarContainer;