import React, { Component } from "react";
import {
    Jumbotron,
    Button,
    Container,
    Row,
    Col,
    CardDeck,
    Card,
    Form,
    Alert,
} from "react-bootstrap";
import contactImg from "../assets/img/contact.svg";
import ScrollAnimation from "react-animate-on-scroll";

export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            submit: false,
            name: "",
            message: "",
        };
    }

    handleName = (e) => {
        this.setState({ name: e.target.value });
    };

    handleMessage = (e) => {
        this.setState({ message: e.target.value });
    };

    handleSubmit = (e) => {
        this.setState({ submit: !this.state.submit });
        window.location.assign(
            `https://api.whatsapp.com/send?phone=+6282128807395&text=Hallo${" "}I'm${" "}${
                this.state.name
            }${" "}${this.state.message}`
        );
        e.preventDefault();
    };

    render() {
        return (
            <div id="contact">
                <Jumbotron>
                    <Container>
                        <Row className="align-items-center">
                            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                                <ScrollAnimation
                                    animateIn="zoomIn"
                                    animateOnce="true"
                                >
                                    <p>
                                        I'am available for web projects. <br />
                                        Let's work together indeed!
                                    </p>
                                </ScrollAnimation>
                                <ScrollAnimation
                                    animateIn="zoomIn"
                                    animateOnce="true"
                                >
                                    <CardDeck>
                                        <Card text="white">
                                            <Form onSubmit={this.handleSubmit}>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Control
                                                        type="text"
                                                        placeholder="Your name"
                                                        onChange={
                                                            this.handleName
                                                        }
                                                        required
                                                    />
                                                </Form.Group>
                                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <Form.Control
                                                        as="textarea"
                                                        rows={3}
                                                        placeholder="Enter Message"
                                                        onChange={
                                                            this.handleMessage
                                                        }
                                                        required
                                                    />
                                                </Form.Group>
                                                <Button
                                                    variant="primary"
                                                    type="submit"
                                                >
                                                    Send
                                                </Button>
                                            </Form>
                                            {this.state.submit && (
                                                <Alert variant="secondary">
                                                    Message Sent
                                                </Alert>
                                            )}
                                        </Card>
                                    </CardDeck>
                                </ScrollAnimation>
                            </Col>
                            <Col xs={12} sm={6} md={6} lg={6} xl={6}>
                                <ScrollAnimation
                                    animateIn="zoomIn"
                                    animateOnce="true"
                                >
                                    <h1>Contact</h1>
                                    <img src={contactImg} alt="code" />
                                </ScrollAnimation>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}
