import React from 'react';
import { HashLink as HLink } from 'react-router-hash-link';
import { Route, Switch } from 'react-router-dom';
import { Navbar, Nav, Image } from 'react-bootstrap';
import Landing from '../pages/Landing.jsx';
import MovePricing from '../components/Pricing.jsx';
import ArrangementPricing from '../components/Arrangement.jsx';
import Logo from "../images/logo.jpg";
import '../styles/NavbarContainer.css';

const NavbarContainer = () => {

  return (
    <>
      <Navbar sticky="top" bg="light" variant="light" expand="md" collapseOnSelect>
        {/* <Image src={Logo} roundedCircle height="10vh"/> */}
        <Navbar.Brand className="mr-auto logo-nav">&ensp;D&D Bros Trucking</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mx-auto">
            <Nav.Link eventKey="1" as={HLink} to="/#intro">Home</Nav.Link>
            <Nav.Link eventKey="2" as={HLink} to="/#about">About Us</Nav.Link>
            <Nav.Link eventKey="3" as={HLink} to="/#service">Services</Nav.Link>
            <Nav.Link eventKey="4" as={HLink} to="/#testimonials">Testimonials</Nav.Link>
            <Nav.Link eventKey="5" as={HLink} to="/#contact">Contact Us</Nav.Link>
            {/* links aren't navigating to the right page/section */}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/pricing" component={MovePricing} />
        <Route exact path="/arrangement" component={ArrangementPricing} />
      </Switch>
    </>
  )
};

export default NavbarContainer;