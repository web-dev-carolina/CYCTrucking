import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import Button from "react-bootstrap/Button";
import { Row, Container, Col } from "react-bootstrap";
import { HashLink as HLink } from "react-router-hash-link";
import Logo from "../images/logo.jpg";
import "../styles/intro.css";
const Intro = () => {
  return (
    <Container id="intro">
      <div id="logoDiv">
        <img src={Logo} alt="D&D Bros Trucking" height="500px" width="500px" />
      </div>
      <div id="infoDiv">
        <h2 id="introHeader">Introduce Your Service</h2>
        <p id="infoText">
          Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
          commodo ligula eget dolor. Aenean massa.
        </p>
        <div id="buttonDiv">
          <button className="introBtn">Learn More</button>
          <button className="introBtn" id="contactUsBtn">
            Contact Us
          </button>
        </div>
      </div>
    </Container>
  );
};
export default Intro;
