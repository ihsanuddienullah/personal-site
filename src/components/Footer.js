import React, { Component } from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import xapiensImg from '../assets/img/xapiens.svg'

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
                                <i className="fab fa-linkedin-in" style={{fontSize: '24px', margin: '10px'}}></i>
                                <i className="fab fa-instagram" style={{fontSize: '24px', margin: '10px'}}></i>
                                <i className="fab fa-github" style={{fontSize: '24px', margin: '10px'}}></i>
                                <i className="fas fa-envelope" style={{fontSize: '24px', margin: '10px'}}></i>
                            </Col>
                            <Col>
                                <img src={xapiensImg} alt="code" />
                            </Col>
                        </Row>
                    </Container>
                </Jumbotron>
            </div>
        );
    }
}
