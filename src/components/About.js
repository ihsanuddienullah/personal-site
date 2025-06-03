import React, { Component } from 'react';
import { Jumbotron, Container, Row, Col } from 'react-bootstrap';
import aboutImg from '../assets/img/about.svg';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Home extends Component {
    render() {
        return (
            <div id="about">
                <Jumbotron>
                    <Container>
                        <Row className="align-items-center">
                            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                                <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                                    <h1>About</h1>
                                    <img src={aboutImg} alt="code" />
                                </ScrollAnimation>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                                <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                                    <p>
                                        A Software Engineer with 4+ years of experience working on front-end development, 
                                        proficient with React JS also familiar with Node JS. 
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
