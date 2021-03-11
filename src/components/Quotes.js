import React, { Component } from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import quotesImg from "../assets/img/quotes.svg";
import ScrollAnimation from "react-animate-on-scroll";

export default class Home extends Component {
    render() {
        return (
            <div id="quotes">
                <Jumbotron>
                    <Container>
                        <Row className="align-items-center">
                            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                                <ScrollAnimation
                                    animateIn="zoomIn"
                                    animateOnce="true"
                                >
                                    <h1>Quotes</h1>
                                    <p>
                                        "What does it feel like when programmer
                                        sit quietly in front of a computer and
                                        do programming? It was like a
                                        King building his empire."
                                    </p>
                                    <p>- M Ihsanuddienullah</p>
                                </ScrollAnimation>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                                <ScrollAnimation
                                    animateIn="zoomIn"
                                    animateOnce="true"
                                >
                                    <img src={quotesImg} alt="code" />
                                </ScrollAnimation>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}
