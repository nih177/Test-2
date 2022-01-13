import React from "react";
import './career.css';
import { Row, Col, Container } from "react-bootstrap";

export default function Career() {
    return (
        <>
            <div className="  career-bg">
                <div className="product-2-content-container-dummy product-2-content-container-dummy-career">
                    <div className="h80 w100 bg-bg"></div>
                    <div className=" d-flex flex-column justify-content-start align-items-center text-center">
                        <span className="section-1-header medium white mt-dummy ">Are you passionate about</span><br />
                        <span className="section-1-header medium white">EV and IoT? Come work with us!</span><br />
                        <span className=" white bold">We Are Looking For Talented Hardware, Firmware And Software Engineers.</span>
                        <span className=" white bold">Share Short Description Of Your Projects / Portfolio.</span><br />

                    </div>
                </div>
            </div>
            {/* <div className="h80 bg-bg"></div> */}
            <div className=" p-2-section-3">
                <div className="product-2-content-container ">
                    <Row className="d-flex    w99p ">
                        <Col md={3}>
                            <div className="h20"></div>
                        </Col>
                        <Col md={6} >
                            <span className="p-headings text-blue d-flex flex-column justify-content-start align-items-center medium">Apply Here</span>
                            <span className="d-flex flex-column justify-content-start align-items-center text-center lite-black light">Please complete the form below to apply for a position with us.</span><br />
                            <div className="d-flex flex-column justify-content-start align-items-center">
                                <input className="w80p border-black p-2-section-3 d-flex flex-column justify-content-start align-items-center" type="text" placeholder="FIRST NAME" ></input><br />
                                <input className="w80p border-black p-2-section-3 d-flex flex-column justify-content-start align-items-center" type="text" placeholder="LAST NAME" ></input><br />

                            </div>
                            <div className="d-flex flex-row">
                                <input className="ml10p w35p border-black p-2-section-3 " type="text" placeholder="YOUR EMAIL" ></input>
                                <input className="ml10p w35p border-black p-2-section-3 " type="text" placeholder="Phone No. / Whatsapp No." ></input>
                            </div>
                            <br />
                            <input className="ml10p" type="checkbox"></input>
                            <span className="ml10 light">Student / Freshers</span>
                            <br />
                            <div className="h10"></div>
                            <input className="ml10p" type="checkbox"></input>
                            <span className="ml10 light">Experience</span>
                            <br />
                            <div className="h10"></div>
                            <div className="h10"></div>
                            {/* <input className="" type="text" placeholder="Name" ></input> */}
                            <textarea className="border-black w70p ml10p p-2-section-3 h125 d-flex flex-column justify-content-start align-items-center" ></textarea><br />
                            <input className="ml10p w80-dummy light" type="file"></input><br />
                            <div className="mb-4"></div>
                            <button className="w125 ml10p btn btn-primary btn-bg medium" type="submit">Submit</button>
                            <div className="h125"></div>
                        </Col>
                    </Row>
                </div>
            </div>

        </>
    );
}