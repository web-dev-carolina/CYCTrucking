import React from 'react';
// import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'
import { Row, Container, Col, Form } from 'react-bootstrap';
// import { HashLink as HLink } from 'react-router-hash-link';
import '../styles/contact.css';

const Contact = () => {
    return (
        <Container id='contactsection' className="sectionContainer">
            <Row>
                <Col>
                    <h2 className="sectionHeader">Contact Us</h2>
                </Col>
            </Row>
            <Row>
                <Col>
                    <h3 id="contactCaption">Please leave your name, email, and any comments or concerns. We will get back to
you as soon as possible!</h3> 
</Col>
            </Row>
            <Row>
                <Col xs={12} md={6} className="center">
                    <Form
                    // onSubmit={handleSubmit}
                    >
                        <Form.Group controlId="formBasicName">
                            <Form.Label>Name</Form.Label>
                            <Form.Control type="name" placeholder="Johnny Appleseed" />
                        </Form.Group>
                        <Form.Group controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control type="email" placeholder="johnny@appleseed.com" />
                        </Form.Group>
                        <Form.Group controlId="controlTextarea1">
                            <Form.Label>Message</Form.Label>
                            <Form.Control as="textarea" type="message" placeholder="Enter your message here" />
                        </Form.Group>
                        <Button variant="secondary" type="submit" className="center">
                            Send
                        </Button>
                    </Form>
                </Col>
            </Row>
        </Container>
    )
}

export default Contact;