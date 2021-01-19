import React from "react";
import { Row, Container, Col, Image, Button, Card } from "react-bootstrap";
import "../styles/service.css";
import House from "../images/HouseIllustration.png";
import Truck from "../images/Truck.png";

const Service = () => {
  return (
    <Container id="service" className="mx-auto">
      <Card style={{ border: "none" }}>
        <Card.Body>
          <Card.Title className="sectionHeader">Services</Card.Title>
          <Row id="services-list">
            <Col sm={6} className="servicesColumn">
              <Image src={Truck} className="serviceImage" alt="Truck"></Image>
              <br />
              <div className="centerText">
                <Card.Subtitle>Moving</Card.Subtitle>
                <Card.Text>
                  We can help you with all the basic moving logistics
                </Card.Text>
                <Button variant="dark" href="/pricing">
                  Get a moving estimate
                </Button>
              </div>
            </Col>
            <Col sm={6} className="servicesColumn">
              <Image src={House} className="serviceImage" alt="House"></Image>
              <br />
              <div className="centerText">
                <Card.Subtitle>Arrangement</Card.Subtitle>
                <Card.Text>
                  We can help you get all your furniture arranged at your
                  destination.
                </Card.Text>
                <Button variant="dark" href="/pricing">
                  Get an arrangement estimate
                </Button>
              </div>
            </Col>
          </Row>
        </Card.Body>
      </Card>
    </Container>
  );
};
export default Service;
