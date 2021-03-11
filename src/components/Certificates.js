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
                            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                                <ScrollAnimation
                                    animateIn="zoomIn"
                                    animateOnce="true"
                                >
                                    <h1>Certificates</h1>
                                    <img src={certificatesImg} alt="code" />
                                </ScrollAnimation>
                            </Col>
                            <Col id="certificatesIcon" xs={12} sm={6} md={6} lg={6} xl={6}>
                                <ScrollAnimation
                                    animateIn="zoomIn"
                                    animateOnce="true"
                                >
                                    <Row>
                                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <Card>
                                                <Card.Body>
                                                    <img
                                                        src={cImg1}
                                                        alt="code"
                                                    />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <Card>
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
                                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <Card>
                                                <Card.Body>
                                                    <img
                                                        src={cImg3}
                                                        alt="code"
                                                    />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <Card>
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
                                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <Card>
                                                <Card.Body>
                                                    <img
                                                        src={cImg5}
                                                        alt="code"
                                                    />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <Card>
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
