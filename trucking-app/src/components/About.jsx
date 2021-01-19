import React from "react";
import { Card, Container } from "react-bootstrap";
import "../styles/about.css";
const About = () => {
  return (
    <Container id="about" className="sectionContainer">
      <Card style={{ border: "none" }}>
        <Card.Body>
          <Card.Title className="sectionHeader">About</Card.Title>
          <Card.Text>
            We are a veteran- and black-owned start-up focused on delivering a
            pleasant moving experience for all of our clients. We emphasize
            reliability, friendliness, care, flexibility, and trustworthiness.
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default About;
