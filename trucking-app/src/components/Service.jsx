import React from 'react';
import { Row, Container, Col, Image } from 'react-bootstrap';
import '../styles/service.css';
import House from "../images/HouseIllustration.png";
import Truck from "../images/Truck.png";

const Service = () => {

    return (
        <Container id="service" className="sectionContainer">
            <h2 className="sectionHeader">Services</h2>
            <Row id="services-list">
                <Col md={6} className="servicesColumn">
                    <Image src={Truck} className="serviceImage" alt="Truck"></Image>
                    <br></br>
                    <div className="centerText">
                        <h3 className="">Moving</h3>
                        <p className="">We can help you with all the basic moving logistics - <a href="/pricing">Get a moving estimate</a></p>
                    </div>
                </Col>
                <Col md={6} className="servicesColumn">
                    <Image src={House} className="serviceImage" alt="House"></Image>
                    <br></br>
                    <div className="centerText">
                        <h3 className="">Arrangement</h3>
                        <p className="">We can help you get all your furniture arranged at your destination - <a href="/arrangement">Get an arrangement estimate</a></p>
                    </div>
                </Col>
            </Row>
        </Container>
    );

}
export default Service;