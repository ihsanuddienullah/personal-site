import React, { Component } from "react";
import { Jumbotron, Card, Container, Row, Col } from "react-bootstrap";
import worksImg from "../assets/img/works.svg";
import worksImg1 from "../assets/img/works1.svg";
import worksImg2 from "../assets/img/works2.svg";
import worksImg3 from "../assets/img/works3.svg";
import worksImg4 from "../assets/img/works4.svg";
import worksImg5 from "../assets/img/works5.svg";
import worksImg6 from "../assets/img/works6.svg";
import ScrollAnimation from "react-animate-on-scroll";
import {
    SiHtml5,
    SiCss3,
    SiJavascript,
    SiPhp,
    SiJava,
    SiCplusplus,
    SiReact,
} from "react-icons/si";

export default class Works extends Component {
    render() {
        return (
            <div id="works">
                <Jumbotron>
                    <Container>
                        <Row className="align-items-center">
                            <Col
                                id="worksIcon"
                                xs={12}
                                sm={6}
                                md={6}
                                lg={6}
                                xl={6}
                            >
                                <ScrollAnimation
                                    animateIn="zoomIn"
                                    animateOnce="true"
                                >
                                    <h1>Works</h1>
                                    <Row>
                                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <Card>
                                                <Card.Body>
                                                    <h1>
                                                        <SiHtml5 />
                                                    </h1>
                                                    {/* <img
                                                        src={worksImg1}
                                                        alt="code"
                                                    /> */}
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <Card>
                                                <Card.Body>
                                                    <h1>
                                                        <SiCss3 />
                                                    </h1>
                                                    {/* <img
                                                        src={worksImg2}
                                                        alt="code"
                                                    /> */}
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <Card>
                                                <Card.Body>
                                                    <h1>
                                                        <SiJavascript />
                                                    </h1>
                                                    {/* <img
                                                        src={worksImg3}
                                                        alt="code"
                                                    /> */}
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <Card>
                                                <Card.Body>
                                                    <h1>
                                                        <SiPhp />
                                                    </h1>
                                                    {/* <img
                                                        src={worksImg4}
                                                        alt="code"
                                                    /> */}
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                    <Row>
                                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <Card>
                                                <Card.Body>
                                                    <h1>
                                                        <SiJava />
                                                    </h1>
                                                    {/* <img
                                                        src={worksImg5}
                                                        alt="code"
                                                    /> */}
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                        <Col xs={6} sm={6} md={6} lg={6} xl={6}>
                                            <Card>
                                                <Card.Body>
                                                    <h1>
                                                        <SiCplusplus />
                                                    </h1>
                                                    {/*
                                                    <img
                                                        src={worksImg6}
                                                        alt="code"
                                                    /> */}
                                                </Card.Body>
                                            </Card>
                                        </Col>
                                    </Row>
                                </ScrollAnimation>
                            </Col>
                            <Col>
                                <ScrollAnimation
                                    animateIn="zoomIn"
                                    animateOnce="true"
                                >
                                    <img src={worksImg} alt="code" />
                                </ScrollAnimation>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}
