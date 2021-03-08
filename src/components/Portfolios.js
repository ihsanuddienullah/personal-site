import React, { Component } from "react";
import { Container, Row, Col, Card, Jumbotron, } from "react-bootstrap";
import ScrollAnimation from "react-animate-on-scroll";
import portfoliosImg1 from "../assets/img/portfolios1.svg";
import portfoliosImg2 from "../assets/img/portfolios2.svg";
import portfoliosImg3 from "../assets/img/portfolios3.svg";
import portfoliosImg4 from "../assets/img/portfolios4.svg";
import portfoliosImg5 from "../assets/img/portfolios5.svg";
import portfoliosImg6 from "../assets/img/portfolios6.svg";

export default class Portfolios extends Component {
    render() {
        return (
            <div id="portfolios">
                <Jumbotron>
                    <Container>
                        <Row className="align-items-center">
                            <Col>
                                <ScrollAnimation
                                    animateIn="zoomIn"
                                    animateOnce="true"
                                >
                                    <h1>Portfolios</h1>
                                </ScrollAnimation>
                            </Col>
                            <Col></Col>
                        </Row>
                        <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                            <Row className="mb-4">
                                <Col>
                                    <Card>
                                        <Card.Img
                                            variant="top"
                                            src={portfoliosImg1}
                                        />
                                        <Card.Body>                            
                                            <Card.Text>
                                                React JS
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Img
                                            variant="top"
                                            src={portfoliosImg2}
                                        />
                                        <Card.Body>
                                            <Card.Text>
                                                UI/UX
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Img
                                            variant="top"
                                            src={portfoliosImg3}
                                        />
                                        <Card.Body>                                            
                                            <Card.Text>
                                                PHP
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </ScrollAnimation>
                        <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                            <Row className="mb-4">
                                <Col>
                                    <Card>
                                        <Card.Img
                                            variant="top"
                                            src={portfoliosImg4}
                                        />
                                        <Card.Body>                                            
                                            <Card.Text>
                                                Java
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Img
                                            variant="top"
                                            src={portfoliosImg5}
                                        />
                                        <Card.Body>                                            
                                            <Card.Text>
                                                C++
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                                <Col>
                                    <Card>
                                        <Card.Img
                                            variant="top"
                                            src={portfoliosImg6}
                                        />
                                        <Card.Body>                                            
                                            <Card.Text>
                                                Python
                                            </Card.Text>
                                        </Card.Body>
                                    </Card>
                                </Col>
                            </Row>
                        </ScrollAnimation>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}
