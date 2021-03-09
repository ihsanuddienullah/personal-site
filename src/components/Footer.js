import React, { Component } from "react";
import { Jumbotron, Container, Row, Col } from "react-bootstrap";
import xapiensImg from '../assets/img/xapiens.svg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedinIn, faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons' 
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

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
                                <FontAwesomeIcon icon={faLinkedinIn} style={{ fontSize: '24px', margin: '10px' }} />
                                <FontAwesomeIcon icon={faInstagram} style={{ fontSize: '24px', margin: '10px' }}/>
                                <FontAwesomeIcon icon={faGithub} style={{ fontSize: '24px', margin: '10px' }}/>
                                <FontAwesomeIcon icon={faEnvelope} style={{ fontSize: '24px', margin: '10px' }}/>
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
