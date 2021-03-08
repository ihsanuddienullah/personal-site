import React, { Component } from "react";
import { Jumbotron, Card, Container, Row, Col } from "react-bootstrap";
import certificatesImg from "../assets/img/certificates.svg";
import cImg1 from "../assets/img/c1.svg";
import cImg2 from "../assets/img/c2.svg";
import cImg3 from "../assets/img/c3.svg";
import cImg4 from "../assets/img/c4.svg";
import cImg5 from "../assets/img/c5.svg";
import cImg6 from "../assets/img/c6.svg";
import ScrollAnimation from "react-animate-on-scroll";

export default class Works extends Component {
    render() {
        return (
            <div id="certificates">
                <Jumbotron>
                    <Container>
                        <Row className="align-items-center">
                            <Col>
                                <ScrollAnimation
                                    animateIn="zoomIn"
                                    animateOnce="true"
                                >
                                    <h1>Certificates</h1>
                                    <img src={certificatesImg} alt="code" />
                                </ScrollAnimation>
                            </Col>
                            <Col id="certificatesIcon" md="auto">
                                <ScrollAnimation
                                    animateIn="zoomIn"
                                    animateOnce="true"
                                >
                                    <Row>
                                        <Col>
                                            <Card style={{ width: "10rem" }}>
                                                <Card.Body>
                                                    <img
                                                        src={cImg1}
                                                        alt="code"
                                                    />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: "10rem" }}>
                                                <Card.Body>
                                                    <img
                                                        src={cImg2}
                                                        alt="code"
                                                    />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Card style={{ width: "10rem" }}>
                                                <Card.Body>
                                                    <img
                                                        src={cImg3}
                                                        alt="code"
                                                    />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: "10rem" }}>
                                                <Card.Body>
                                                    <img
                                                        src={cImg4}
                                                        alt="code"
                                                    />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Card style={{ width: "10rem" }}>
                                                <Card.Body>
                                                    <img
                                                        src={cImg5}
                                                        alt="code"
                                                    />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card style={{ width: "10rem" }}>
                                                <Card.Body>
                                                    <img
                                                        src={cImg6}
                                                        alt="code"
                                                    />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </ScrollAnimation>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}
