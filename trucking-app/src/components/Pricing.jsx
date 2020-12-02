import React, { useState } from "react";
import { Col, Form, Button, Container } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import "../styles/pricing.css";

const Pricing = () => {
    const [movingPkg, setMovingPkg] = useState(0);
    const [ease, setEase] = useState(0);
    const [loadTime, setLoadTime] = useState(0);
    const [needsBoxes, setNeedsBoxes] = useState(0);
    const [moveDist, setMoveDist] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    const history = useHistory();

    const boxesCost = 45;
    const extraTruck = 100;
    const mileCost = .7;

    const handleSubmit = (e) => {
        e.preventDefault();
        let total = parseInt(movingPkg) + ease * loadTime + (movingPkg == 500 ? extraTruck : 0) + needsBoxes * boxesCost + mileCost * moveDist;
        setTotalCost(Math.round(total));
    }

    const backToHome = (e) => {
        e.preventDefault();
        history.push('/');
    }

    return (
        <>
            <Container id="pricingForm" className="sectionContainer">
                <h2>Price Estimator</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Row>
                        <ul>
                            <li>POD is an option where the truck is left at a destination for the customer to pack themselves. POD rates will be lower than most of the other options.</li>
                        </ul>
                    </Form.Row>
                    <Form.Row>
                        <Col>

                            <Form.Group controlId="package">
                                <Form.Label>Select your moving package based on the destination:</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={movingPkg}
                                    onChange={(e) => setMovingPkg(e.target.value)}
                                >
                                    <option value={250}>POD (+0)</option>
                                    <option value={275}>Basic (+0) (&lt;1500 sq ft)</option>
                                    <option value={400}>Standard (+125) (&gt;1500 and &lt;3000 sq ft)</option>
                                    <option value={500}>Premium (+225) (&gt;3000 sq ft)</option>
                                </Form.Control>
                                <Form.Text muted>
                                    The base rate for POD is $250 and the base rate for a normal move is $275.
                                </Form.Text>
                                <Form.Text muted>
                                    For the premium package, we assume 2 trucks are needed. This is an additional $100. This may not actually be the case.
                                </Form.Text>
                            </Form.Group>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="ease">
                                        <Form.Label>Ease of move:</Form.Label>
                                        <Form.Control
                                            as="select"
                                            value={ease}
                                            onChange={(e) => setEase(e.target.value)}
                                        >
                                            <option value={.7}>POD ($.70/min)</option>
                                            <option value={.5}>Easy ($.50/min)</option>
                                            <option value={1.15}>Moderate ($1.15/min)</option>
                                            <option value={2}>Difficult ($2/min)</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="loadTime">
                                        <Form.Label>Estimated moving time:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter an estimated time in minutes"
                                            value={loadTime}
                                            onChange={(e) => setLoadTime(e.target.value)}
                                        />
                                    </Form.Group>
                                    <Form.Text muted>
                                        This is the total moving time, excluding time spent traveling.
                                    </Form.Text>
                                </Col>
                            </Form.Row>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="needsBoxes">
                                        <Form.Label>Boxes supply:</Form.Label>
                                        <Form.Control
                                            as="select"
                                            value={needsBoxes}
                                            onChange={(e) => setNeedsBoxes(e.target.value)}
                                        >
                                            <option value={1}>We will provide the boxes</option>
                                            <option value={0}>You will provide your own boxes</option>
                                        </Form.Control>
                                        <Form.Text muted>
                                            We charge $45 extra if we're providing the boxes.
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="moveDist">
                                        <Form.Label>Moving distance:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter the distance from A to B in miles"
                                            value={moveDist}
                                            onChange={(e) => setMoveDist(e.target.value)}
                                        >
                                        </Form.Control>
                                        <Form.Text muted>
                                            Travelling charge is $0.70/mile.
                                        </Form.Text>
                                    </Form.Group>
                                </Col>
                            </Form.Row>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Col>
                            <Button block size="md" type="submit" variant="secondary" onClick={handleSubmit}> Estimate Total Price </Button>
                        </Col>
                        <Col className="center">
                            <strong>Our Quote: ${totalCost}</strong>
                        </Col>
                    </Form.Row>
                    <Form.Row>
                        <Button size="md" type="submit" variant="link" onClick={backToHome}> Back to homepage </Button>
                    </Form.Row>
                </Form>
            </Container>
        </>
    );
}

export default Pricing;