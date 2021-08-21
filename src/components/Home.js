import React, { Component } from "react";
import { Jumbotron, Button, Container, Row, Col } from "react-bootstrap";
import homeImg from "../assets/img/home.svg";
import { Animated } from "react-animated-css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedinIn,
    faGitlab,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default class Home extends Component {
    render() {
        return (
            <div id="home">
                <Jumbotron>
                    <Container>
                        <Row className="align-items-center">
                            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                                <h1>Oh, Hello World!</h1>
                                <p>I'm Muhammad Ihsanuddienullah.</p>
                                <p>Software Engineer</p>
                                <div className="social-media">
                                    <a href="mailto:ihsanuddienullah@gmail.com?subject=Hi!">
                                        <FontAwesomeIcon
                                            icon={faEnvelope}
                                            style={{
                                                fontSize: "24px",
                                                margin: "10px",
                                            }}
                                        />
                                    </a>
                                    <a href="https://www.linkedin.com/in/ihsanuddienullah/">
                                        <FontAwesomeIcon
                                            icon={faLinkedinIn}
                                            style={{
                                                fontSize: "24px",
                                                margin: "10px",
                                            }}
                                        />
                                    </a>
                                    <a href="https://github.com/ihsanuddienullah">
                                        <FontAwesomeIcon
                                            icon={faGithub}
                                            style={{
                                                fontSize: "24px",
                                                margin: "10px",
                                            }}
                                        />
                                    </a>
                                    <a href="https://gitlab.com/ihsanuddienullah">
                                        <FontAwesomeIcon
                                            icon={faGitlab}
                                            style={{
                                                fontSize: "24px",
                                                margin: "10px",
                                            }}
                                        />
                                    </a>
                                </div>
                                <p>
                                    <Button variant="primary" href="#about">
                                        More about me ...
                                    </Button>
                                </p>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                                <Animated
                                    animationIn="pulse"
                                    className="animate__infinite	infinite"
                                >
                                    <img src={homeImg} alt="code" />
                                </Animated>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}
