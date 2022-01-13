import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import "./section-3.css";

function Section3() {
    return (
        <div className="section-3 whowe pl15 pr10">
            <h1 className="section-3-heading align-center text-blue">About Us</h1>
            <h5 className="align-center lite-black">Who We Are</h5>
            <br />
            <br />
            <Container>
                <Row className="">
                    <Col xs={12} md={6}>
                        <h6>Techology has the inherent power to solve many real-word problems that can make the lives of consumers smooth and effortless.  Along with mobile technology, Axonify believes in innovating the areas of EV Charging, IoT, bringing experimentation in sensory technology in secure environments.<br /><br />
                            Our core value lies in building products that are reliable, robust, secure and also extremely affordable for the consumers.  Named after Axon, a brain part that transfers information at rocket-speed,  Axonify connects multiple devices and collaborates with external systems for valued applications and problem-solving. <br /><br />
                            We also provide solutions for industries and agricultural sectors by empowering them with technology and making them easy to use through mobile applications.
                        </h6>
                        <br />
                        <button className="btn-bg btn btn-primary medium">Read More</button>
                        <br/>
                        <br/>
                        <br/>
                    </Col>
                    <Col xs={12} md={6}>
                        {/* <img src='/images/business-meeting.svg'></img> */}
                    </Col>
                </Row>
            </Container>

        </div>
    );
}

export default Section3;