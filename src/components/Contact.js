import React, { Component } from 'react';
import { Jumbotron, Button, Container, Row, Col, CardDeck, Card, Form, Alert } from 'react-bootstrap';
import contactImg from '../assets/img/contact.svg';
import ScrollAnimation from 'react-animate-on-scroll';

export default class Contact extends Component {
    constructor(props) {
        super(props);

        this.state = {
            submit: false
        }
    }

    handleSubmit = (e) => {
        this.setState({submit : !this.state.submit});
        e.preventDefault();
    }

    render() {
        return (
            <div id="contact">
                <Jumbotron>
                    <Container>
                        <Row className="align-items-center">
                            <Col md="auto">
                                <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                                    <h1>Contact</h1>
                                    <img src={contactImg} alt="code" />
                                </ScrollAnimation>
                            </Col>
                            <Col> 
                                <ScrollAnimation animateIn="zoomIn" animateOnce="true">
                                    <CardDeck>
                                        <Card
                                            text="white"
                                            style={{ width: "18rem" }}
                                        >
                                            <Form onSubmit={this.handleSubmit}>
                                                <Form.Group controlId="formBasicEmail">
                                                    <Form.Control
                                                        type="email"
                                                        placeholder="Enter Email"
                                                    />
                                                </Form.Group>
                                                <Form.Group controlId="exampleForm.ControlTextarea1">
                                                    <Form.Control
                                                        as="textarea"
                                                        rows={3}
                                                        placeholder="Enter Message"
                                                    />
                                                </Form.Group>
                                                <Form.Group controlId="formBasicCheckbox"></Form.Group>
                                                <Button
                                                    variant="primary"
                                                    type="submit"
                                                >
                                                    Send
                                                </Button>
                                            </Form>
                                            {this.state.submit && <Alert variant="secondary">Message Sent</Alert>}
                                        </Card>
                                    </CardDeck>
                                </ScrollAnimation>
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        )
    }
}
