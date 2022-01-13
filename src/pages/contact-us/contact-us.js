import React from "react";
import "./contact-us.css";
import { Row, Col, Container } from "react-bootstrap";
import Footer from "../../components/footer/footer";
function Contact() {
    return (
        <>
            <div className="contact-us-page bg-bg ">
                <div className="product-2-content-container-dummy  ">
                    {/* <div className="h55"></div> */}
                    <Row className="d-flex  justify-content-center align-items-center text-center w99p">
                        <span className="p-headings text-blue medium">How can we help</span>
                        <h6 className="lite-black">Please fill the support form and our Team will get back to you in 24 hrs.</h6>
                        <div className="h55"></div>
                        <Col md={4} className="d-flex flex-column justify-content-start align-items-center w250 mt-3">
                            {/* <div> */}
                            <img className="w40p mt-1" src="/images/headphones-bg.svg"></img><div className="h10"></div>
                            <h6 className="lite-black">1st level support</h6>
                            <h6 className="lite-black">+91 97058 02137</h6>
                            <h6 className="lite-black">Fill support form</h6>
                            {/* <div className="h10"></div>
                            <button className="w200">Brochere User Manual</button> */}
                            {/* </div> */}
                        </Col>


                        <Col md={4} className="d-flex flex-column justify-content-start align-items-center w250 mt-3">
                            {/* <div> */}
                            <img className="w40p mt-1" src="/images/headphones-bg.svg"></img><div className="h10"></div>
                            <h6 className="lite-black">2nd level support</h6>
                            <h6 className="lite-black">+91 85111 01209</h6>
                            <h6 className="lite-black">naveen@axonifytech.com</h6>
                            {/* <div className="h10"></div>
                            <button className="w200">Brochere User Manual</button> */}
                            {/* </div> */}
                        </Col>
                        <Col md={4} className="d-flex flex-column justify-content-start align-items-center w250 mt-3">
                            {/* <div> */}
                            <img className="w40p mt-1" src="/images/headphones-bg.svg"></img><div className="h10"></div>
                            <h6 className="lite-black">3rd level support</h6>
                            <h6 className="lite-black">+91 90594 32969</h6>
                            <h6 className="lite-black">ceo@axonifytech.com</h6>
                            {/* <div className="h10"></div>
                            <button className="w200">Brochere User Manual</button> */}
                            {/* </div> */}
                        </Col>
                        {/* <div className="h125"></div> */}
                    </Row>

                </div>
            </div>
            <div className=" p-2-section-3">
                <div className="product-2-content-container ">
                    <Row className="d-flex    w99p ">
                        {/* <Col>
                            <div className="h20"></div>
                        </Col> */}
                        {/* <Col md={1}>
                            <div className="h20"></div>
                        </Col> */}
                        <Col  md={12}>
                            <span className="p-headings text-blue d-flex flex-column justify-content-start align-items-center medium mt-3">Fill support form</span><br />
                            <div className="d-flex flex-column justify-content-start align-items-center">
                                <input className="w60p border-black p-2-section-3 d-flex flex-column justify-content-start align-items-center" type="text" placeholder="NAME" ></input><br />
                                <input className="w60p border-black p-2-section-3 d-flex flex-column justify-content-start align-items-center" type="text" placeholder="EMAIL" ></input><br />
                                <input className="w60p border-black p-2-section-3 d-flex flex-column justify-content-start align-items-center" type="text" placeholder="PHONE" ></input><br />
                            </div>
                            {/* <input className="" type="text" placeholder="Name" ></input> */}
                                <textarea className="border-black w50p ml20p p-2-section-3 h125 d-flex flex-column justify-content-start align-items-center" placeholder="Message"></textarea><br />
                                <button className="w125 ml20p btn btn-primary btn-bg mb-4 medium" type="submit">Submit</button>
                                {/* <div className="h125"></div> */}

                        </Col>
                        {/* <Col md={1}>
                            <div className="h20"></div>
                        </Col> */}
                    </Row>
                </div>
            </div>

        </>
    );
}

export default Contact;