import React, { Component } from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
// import xapiensImg from "../assets/img/xapiens.svg";
import logo from '../assets/img/ihsan.svg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faLinkedinIn,
    faGitlab,
    faGithub,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

export default class Footer extends Component {
    render() {
        return (
            <div id="footer">
                <Jumbotron>
                    <Container>
                        <Row className="align-items-center">
                            <Col>
                                <p>
                                    Copyright © 2021 Muhammad Ihsanuddienullah |
                                    All rights reserved
                                </p>
                                <p>Ihsanuddienullah@gmail.com</p>
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
                            </Col>
                            <Col>
                                <img src={logo} alt="ihsan-logo" />
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}
