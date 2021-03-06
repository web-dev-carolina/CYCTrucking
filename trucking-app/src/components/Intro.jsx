import React from "react";
import { Row, Container, Col, Image } from "react-bootstrap";
import Logo from "../images/logo.png";
import "../styles/intro.css";

const Intro = () => {
  return (
    <Container id="intro" className="sectionContainer">
      <Row>
        <Col id="logoDiv">
            <Image id="introLogo" src={Logo} alt="D&amp;D Bros logo" rounded/>
        </Col>
        <Col id="infoDiv">
            <h2 id="introHeader">D&amp;D Bros</h2>
            <h3 id="introSubheader">Trucking and Moving Service</h3>
        </Col>
      </Row>
    </Container>
  );
};
export default Intro;
