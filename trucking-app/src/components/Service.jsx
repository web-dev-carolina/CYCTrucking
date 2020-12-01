import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import { Row, Container, Col, Button } from 'react-bootstrap';
import { HashLink as HLink } from 'react-router-hash-link';
import '../styles/service.css';
const Service = () => {

    return (
        <Container id="service">
            <h2>Services</h2>
            <div id="services-list">
                <ul>
                    <li>Service 1</li>
                    <li>Service 2</li>
                </ul>
            </div>
            <Button>Pricing</Button>
        </Container>
    );

}
export default Service;