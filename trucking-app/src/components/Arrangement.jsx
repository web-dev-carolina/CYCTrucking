import React, { useState } from "react";
import { Col, Form, Button, Container } from 'react-bootstrap';
import { useHistory } from "react-router-dom";
import "../styles/pricing.css";

const Arrangement = () => {
    const [stairs, setStairs] = useState(0);
    const [walkingDist, setWalkingDist] = useState(0);
    const [workTime, setWorkTime] = useState(0);
    const [totalCost, setTotalCost] = useState(0);
    const history = useHistory();

    const workCost = 1;

    const handleSubmit = (e) => {
        e.preventDefault();
        setTotalCost(parseInt(stairs) + parseInt(walkingDist) + parseInt(workTime) * workCost);
    }

    const backToHome = (e) => {
        e.preventDefault();
        history.push('/');
    }

    return (
        <>
            <Container id="arrangementForm" className="sectionContainer">
                <h2>In-Home Arrangement Price Estimator</h2>
                <Form onSubmit={handleSubmit}>
                    <Form.Row>
                        <Col>

                            <Form.Group controlId="stairs">
                                <Form.Label>Flights of stairs:</Form.Label>
                                <Form.Control
                                    as="select"
                                    value={stairs}
                                    onChange={(e) => setStairs(e.target.value)}
                                >
                                    <option value={0}>No stairs</option>
                                    <option value={15}>1-2 flights</option>
                                    <option value={25}>3 or more flights</option>
                                </Form.Control>
                                <Form.Text muted>
                                    The base rate $15 if there are stairs and an extra $10 if there are more than 2 flights.
                                </Form.Text>
                            </Form.Group>
                            <Form.Row>
                                <Col>
                                    <Form.Group controlId="walkingDist">
                                        <Form.Label>Walking distance:</Form.Label>
                                        <Form.Control
                                            as="select"
                                            value={walkingDist}
                                            onChange={(e) => setWalkingDist(e.target.value)}
                                        >
                                            <option value={0}>Short</option>
                                            <option value={15}>Medium</option>
                                            <option value={20}>Far</option>
                                        </Form.Control>
                                    </Form.Group>
                                </Col>
                                <Col>
                                    <Form.Group controlId="workTime">
                                        <Form.Label>Estimated work time:</Form.Label>
                                        <Form.Control
                                            type="text"
                                            placeholder="Enter an estimated time in minutes"
                                            value={workTime}
                                            onChange={(e) => setWorkTime(e.target.value)}
                                        />
                                        <Form.Text muted>
                                            The work rate is $1/minute.
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
                            {totalCost == 0 ?  
                                <p></p> :  
                                <strong>Our Quote: ${totalCost}</strong>
                            }
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

export default Arrangement;