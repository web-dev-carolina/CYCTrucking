import React from 'react';
import Button from 'react-bootstrap/Button'
import { Row, Container, Col } from 'react-bootstrap';
import { HashLink as HLink } from 'react-router-hash-link';
import logo from '../images/logo-gif.gif'
import '../css/footer.css';
const Footer = () => {

    return (
        <Container id="footer">
            <Row className="footer-content">
                <Col>
                    <div className="logo-container">
                        <img src={logo} />
                    </div>
                    <h3>D&D Bros</h3>
                    <p>Copyright &copy; 2020. Designed by Web Dev Carolina</p>
                </Col>
            </Row>
        </Container>
    );

}
export default Footer;