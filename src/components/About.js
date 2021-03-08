import React, { Component } from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';
import aboutImg from '../assets/img/about.svg';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Home extends Component {
    render() {
        return (
            <div id="about">
                <Jumbotron>
                    <Container>
                        <Row className="align-items-center">
                            <Col >
                                <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                                    <h1>About</h1>
                                    <img src={aboutImg} alt="code" />
                                </ScrollAnimation>
                            </Col>
                            <Col>
                                <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                                    <p>
                                        Graduate student of Informatics Engineering.
                                        Born and raised in Java, Indonesia. I run things with passion, lifelong learning.
                                        Passionate about client-side programming especially UI design and front-end environment.
                                    </p>
                                </ScrollAnimation>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}
