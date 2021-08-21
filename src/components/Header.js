import React, { Component } from "react";
import { Nav, Navbar } from "react-bootstrap";
import logo from '../assets/img/ihsan.svg';

export default class Header extends Component {
    render() {
        return (
            <div id="header">
                <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" fixed="top">
                    <Navbar.Brand href="#home">
                        <img
                            src={logo}
                            width="100"
                            height="50"
                            className="d-inline-block align-top"
                            alt="React Bootstrap logo"
                        />
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="ml-auto navbar-right">
                            <Nav.Link href="#home">Home</Nav.Link>
                            <Nav.Link href="#about">About</Nav.Link>
                            {/* <Nav.Link href="#works">Works</Nav.Link>                            
                            <Nav.Link href="#portfolios">Portfolios</Nav.Link>
                            <Nav.Link href="#certificates">Certificates</Nav.Link>
                            <Nav.Link href="#quotes">Quotes</Nav.Link> */}
                            <Nav.Link href="#contact">Contact</Nav.Link>                            
                        </Nav>                        
                    </Navbar.Collapse>
                </Navbar>
            </div>
        );
    }
}
