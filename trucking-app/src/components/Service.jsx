import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Row, Container, Col, Button } from 'react-bootstrap';
import { HashLink as HLink } from 'react-router-hash-link';
import { useHistory } from "react-router-dom";
import '../styles/service.css';

const Service = () => {
    const history = useHistory();

    const handleClick = (e) => {
        history.push('/pricing');
    }

    return (
        <Container id="service" className="sectionContainer">
            <h2>Services</h2>
            <div id="services-list">
                <ul>
                    <li>Service 1: Residential moving</li>
                    <li>Service 2: In-home arrangement</li>
                </ul>
            </div>
            <Button variant="outline-dark" onClick={handleClick}>Get a moving estimate</Button>
            <Button variant="outline-dark" onClick={handleClick}>Get an arrangement estimate</Button>
        </Container>
    );

}
export default Service;