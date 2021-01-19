import React from "react";
import { HashLink as HLink } from "react-router-hash-link";
import { Route, Switch } from "react-router-dom";
import { Navbar, Nav } from "react-bootstrap";
import Landing from "../pages/Landing.jsx";
import MovePricing from "../components/Pricing.jsx";
import ArrangementPricing from "../components/Arrangement.jsx";
import "../styles/NavbarContainer.css";

const NavbarContainer = () => {
  return (
    <>
      <Navbar
        id="navbar"
        sticky="top"
        bg="light"
        variant="light"
        expand="md"
        collapseOnSelect
      >
        <Navbar.Brand className="mr-auto logo-nav">
          <Nav.Link as={HLink} to="/#intro" style={{color: "black"}}>
            &ensp;D&amp;D Bros Trucking
          </Nav.Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse>
          <Nav className="mr-auto">
            <Nav.Link className="navLink" as={HLink} to="/#about">
              About Us
            </Nav.Link>
            <Nav.Link className="navLink" as={HLink} to="/#service">
              Services
            </Nav.Link>
            {/* <Nav.Link as={HLink} to="/#testimonials">Testimonials</Nav.Link> */}
            <Nav.Link className="navLink" as={HLink} to="/#contact">
              Contact Us
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route exact path="/pricing" component={MovePricing} />
        <Route exact path="/arrangement" component={ArrangementPricing} />
      </Switch>
    </>
  );
};

export default NavbarContainer;
