import React, { Component } from 'react';
import { Jumbotron, Card, Container, Row, Col } from 'react-bootstrap';
import worksImg from '../assets/img/works.svg';
import worksImg1 from '../assets/img/works1.svg';
import worksImg2 from '../assets/img/works2.svg';
import worksImg3 from '../assets/img/works3.svg';
import worksImg4 from '../assets/img/works4.svg';
import worksImg5 from '../assets/img/works5.svg';
import worksImg6 from '../assets/img/works6.svg';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Works extends Component {
    render() {
        return (
            <div id="works">
                <Jumbotron>
                    <Container>
                        <Row className="align-items-center">
                            <Col id="worksIcon" md="auto">
                                <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                                    <h1>Works</h1>
                                    <Row>
                                        <Col>
                                            <Card>
                                                <Card.Body>
                                                    <img src={worksImg1} alt="code" />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <Card.Body>
                                                    <img src={worksImg2} alt="code" />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Card>
                                                <Card.Body>
                                                    <img src={worksImg3} alt="code" />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <Card.Body>
                                                    <img src={worksImg4} alt="code" />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col>
                                            <Card>
                                                <Card.Body>
                                                    <img src={worksImg5} alt="code" />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col>
                                            <Card>
                                                <Card.Body>
                                                    <img src={worksImg6} alt="code" />
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </ScrollAnimation>
                            </Col>
                            <Col >
                                <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                                    <img src={worksImg} alt="code" />
                                </ScrollAnimation>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}
