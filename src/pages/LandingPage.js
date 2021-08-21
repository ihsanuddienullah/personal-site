import React, { Component } from "react";
import Header from "../components/Header";
import Home from "../components/Home";
import About from "../components/About";
import Works from "../components/Works";
import Contact from "../components/Contact";
import Portfolios from "../components/Portfolios";
import Certificates from "../components/Certificates";
import Quotes from "../components/Quotes"
import Footer from "../components/Footer";


export default class LandingPage extends Component {
    render() {
        return (
            <div>
                <Header />
                <Home />
                <About />
                {/* <Works />
                <Portfolios />
                <Certificates />
                <Quotes /> */}
                <Contact />
                <Footer />
            </div>
        );
    }
}
