import React from 'react';
import Button from 'react-bootstrap/Button'
import { Row, Container, Col } from 'react-bootstrap';
import { HashLink as HLink } from 'react-router-hash-link';
import logo from '../images/logo.png'
import '../styles/footer.css';
const Footer = () => {

    return (
        <Container fluid id="footer" className="sectionContainer">
            <Row className="footer-content">
                <Col md={6}>
                    <div className="logo-container">
                        <img src={logo} />
                    </div>
                </Col>
                <Col md={6}>    
                    <h3>D&D Bros</h3>
                    <p>Copyright &copy; 2020. Designed by Web Dev Carolina</p>
                </Col>
            </Row>
        </Container>
    );

}
export default Footer;