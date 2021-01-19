import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Container, Card, Form } from "react-bootstrap";
import "../styles/contact.css";

const Contact = () => {
  const axios = require("axios");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const submitForm = (e) => {
    e.preventDefault();
    if (!name || !email || !message) {
      alert("Error: Each field must be filled in.");
      return;
    }
    return axios({
      method: "post",
      // baseURL: "http://localhost:5001/personal-site-fda9e/us-central1",
      baseURL: "https://us-central1-personal-site-fda9e.cloudfunctions.net",
      url: "/sendEmailDDBros",
      data: {
        name: name,
        email: email,
        message: message,
      },
    })
      .then(() =>
        alert(
          `Thanks for messaging us ${name}! We'll be in touch shortly at ${email}.`
        )
      )
      .catch((err) => console.error(err));
  };

  return (
    <Container className="mx-auto" id="contact">
      <Card style={{ border: "none" }}>
        <Card.Body>
          <Card.Title className="sectionHeader">Contact Us!</Card.Title>
          <Container id="contactForm">
            <Form onSubmit={submitForm}>
              <Form.Group style={{ width: "20vw" }}>
                <Form.Label>
                  Name
                  <Form.Control
                    type="text"
                    placeholder="Name"
                    onChange={(e) => setName(e.target.value)}
                  />
                </Form.Label>
              </Form.Group>

              <Form.Group controlId="formBasicEmail" style={{ width: "20vw" }}>
                <Form.Label>
                  Email address
                  <Form.Control
                    type="email"
                    placeholder="Email"
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </Form.Label>
              </Form.Group>

              <Form.Group
                controlId="exampleForm.ControlTextarea1"
                style={{ width: "50vw" }}
              >
                <Form.Label>Message</Form.Label>
                <Form.Control
                  as="textarea"
                  rows={3}
                  placeholder="Please leave your name, email, and any comments or concerns. We will get back to
                    you as soon as possible!"
                  onChange={(e) => setMessage(e.target.value)}
                />
              </Form.Group>
              <Button variant="dark" type="submit">
                Submit
              </Button>
            </Form>
          </Container>
        </Card.Body>
      </Card>
    </Container>
  );
};

export default Contact;
