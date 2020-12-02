import React from "react";
import Jumbotron from "react-bootstrap/Jumbotron";
import { Row, Container, Col, Image } from "react-bootstrap";
import { HashLink as HLink } from "react-router-hash-link";
import Logo from "../images/logo.png";
import "../styles/intro.css";
const Intro = () => {
  return (
    <Container id="intro" className="sectionContainer">
      <Row>
        <Col sm={12} md={3} id="logoDiv">
            <Image id="introLogo" src={Logo} alt="D&D Bros logo" rounded/>
        </Col>
        <Col sm={12} md={8} id="infoDiv">
            <h2 id="introHeader">Introduce Your Service</h2>
            <p id="infoText">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
        </p>
            <div id="buttonDiv">
              <button className="introBtn" id="learnMoreBtn">Learn More</button>
              <button className="introBtn" id="contactUsBtn">Contact Us</button>
            </div>
        </Col>
      </Row>
    </Container>
  );
};
export default Intro;
