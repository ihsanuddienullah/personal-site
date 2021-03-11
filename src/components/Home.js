import React, { Component } from 'react';
import { Jumbotron, Button, Container, Row, Col } from 'react-bootstrap';
import homeImg from '../assets/img/home.svg';
import { Animated } from "react-animated-css";

export default class Home extends Component {
    render() {
        return (
            <div id="home">
                <Jumbotron>
                    <Container>
                        <Row className="align-items-center">
                            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                                <h1>Oh, Hello World!</h1>
                                <p>
                                    My name is
                                    </p>
                                <p>
                                    Muhammad Ihsanuddienullah
                                    </p>
                                <p>
                                    I'm a Software Engineer
                                    </p>
                                <p>
                                    <Button variant="primary" href="#about">More about me ...</Button>
                                </p>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                                <Animated animationIn="pulse" className="animate__infinite	infinite">
                                    <img src={homeImg} alt="code" />
                                </Animated>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}
