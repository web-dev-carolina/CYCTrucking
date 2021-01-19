import React from "react";
import { Card, Container } from "react-bootstrap";

const Footer = () => {
  return (
      <Card id="footer" bg="light" text="dark" className="fixed-bottom">
        <Card.Body>
          <Container>
            <Card.Text>Created by Web Dev Carolina. Copyright &copy; 2021</Card.Text>
          </Container>
        </Card.Body>
      </Card>
  );
};

export default Footer;