import React from "react";
import { Row, Col, Container } from "react-bootstrap";
import "./section1.css";

function Section1() {
    return (
        <div className="section-1 pl15 pr10">
            <div className="section-1-content-container">
                <Container>
                    <Row>
                        <Col xs={12} md={6}>
                            <h1 className="section-1-header text-blue">Home</h1>
                            <h1 className="section-1-header lite-black">EV Charger</h1>
                            <br />
                            <div className="section-1-inner-content-contaniner">
                                <h6>
                                    Atom AC Wall box 3.3 to 7.2 KW charger provides intelligent
                                    charging solutions for any home.
                                </h6>
                                <br />
                                <Row>
                                    <Col>

                                        <div className="icon-box-row">
                                            <img src="/images/feature.png" className="feature-icon" />
                                            &nbsp;
                                            <h6>Compact design</h6>
                                        </div>
                                    </Col>
                                    <Col><div className="icon-box-row">
                                        <img src="/images/feature.png" className="feature-icon" />
                                        &nbsp;
                                        <h6>Digital User Interface</h6>
                                    </div></Col>
                                </Row>
                                <Row>
                                    <Col><div className="icon-box-row">
                                        <img src="/images/feature.png" className="feature-icon" />
                                        &nbsp;
                                        <h6>Multi Gun Feature</h6>
                                    </div></Col>
                                    <Col><div className="icon-box-row">
                                        <img src="/images/feature.png" className="feature-icon" />
                                        &nbsp;
                                        <h6>High quality</h6>
                                    </div></Col>
                                </Row>
                                <br />
                                <div className="icon-box-row">
                                    <Col>
                                        <img src="/images/Group 28.png" className="section-1-icon" />
                                        <h6 className="align-center">Residential</h6>
                                    </Col>
                                    &nbsp;&nbsp;&nbsp;
                                    <Col>
                                        <img src="/images/Group 28.png" className="section-1-icon" />
                                        <h6 className="align-center" >Office</h6>
                                    </Col>
                                    &nbsp;&nbsp;&nbsp;
                                    <Col>
                                        <img src="/images/Group 28.png" className="section-1-icon" />
                                        <h6 className="align-center">Commercial</h6>
                                    </Col>
                                </div>
                            </div>
                        </Col>
                        <Col></Col>
                    </Row>
                </Container>
            </div>
        </div>
    );
}

export default Section1;