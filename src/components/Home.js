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
                            <Col>
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
                            <Col>
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
