import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button'
import { Row, Container, Col } from 'react-bootstrap';
import { HashLink as HLink } from 'react-router-hash-link';
import '../styles/about.css';
const About = () => {

    return (
        <Container id="about" className="sectionContainer">
            <h2 className="sectionHeader">About</h2>
            We are a veteran- and black-owned start-up focused on delivering a pleasant moving experience for all of our clients. We emphasize reliability, friendliness, care, flexibility, and trustworthiness.
        </Container>
    );

}
export default About;