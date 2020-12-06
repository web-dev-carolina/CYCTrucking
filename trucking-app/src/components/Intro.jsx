import React from "react";
import { Row, Container, Col, Image } from "react-bootstrap";
import Logo from "../images/logo.png";
import "../styles/intro.css";
const Intro = () => {
  return (
    <Container id="intro" className="sectionContainer">
      <Row>
        <Col sm={12} md={3} id="logoDiv">
            <Image id="introLogo" src={Logo} alt="d&d bros logo" rounded/>
        </Col>
        <Col sm={12} md={8} id="infoDiv">
            <h2 id="introHeader">D&D Bros</h2>
            <h3 id="introSubheader">Trucking and Moving Service</h3>
            {/* <p id="infoText">
              Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
              commodo ligula eget dolor. Aenean massa.
            </p> */}
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
