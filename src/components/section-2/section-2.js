import React from "react";
import { Row, Col, Container, Card, Button } from "react-bootstrap";
import "./section-2.css";
import { useState,useEffect } from "react";

function Section2() {

    const [read,setRead] = useState(0);
    const [read2,setRead2] = useState(1);
    
    function enter(e) {
        const classValue = e.target.getAttribute("id");
        document.getElementById(classValue).style.opacity = "0";
    }
    function leave(e) {
        const classValue = e.target.getAttribute("id");
        document.getElementById(classValue).style.opacity = "1";
    }
    function myfunc(e)
    {
        const text = e.target.getAttribute("text");
        const head = e.target.getAttribute("head");
        const dots = e.target.getAttribute("dots");
        const id = e.target.getAttribute("id");
        console.log(text,head,dots,read,read2);
        if(read == 0)
        {

            document.getElementById(head).style.height = "335px"
            document.getElementById(text).style.display = "block"
            document.getElementById(dots).style.display = "none"
            document.getElementById(id).innerHTML = "Read less"
            setRead(1)
        }
        else{
            document.getElementById(head).style.height = "auto"
            document.getElementById(text).style.display = "none"
            document.getElementById(dots).style.display = "inline-block"
            document.getElementById(id).innerHTML = "Read more"
            setRead(0)
           
        }
    }
    // useEffect(() => {
    //     if (read == 0) {
    //       setRead(1);
    //     }
    //     else{
    //         setRead(0)
    //     }
    
    //   }, [read])
    return (
        <div className="section-2 pl10 pr10">
            <h1 className="section-2-heading align-center white">Our Products</h1>
            <h5 className="align-center white">We Provide Innovative Products For Sustainable Future.</h5>
            <br />
            <br />
            <>
                <Row className="section-2-card-container ml0">
                    <Col className="d-flex flex-column justify-content-start align-items-center mb-3">
                        <Card bsPrefix="section-2-card" style={{}}>
                            {/* <Card.Img variant="top" src="/images/power.png" className=""/> */}
                            <div className="h185 bg-hover-1">
                                <Card.Img id="1" onMouseEnter={e => { enter(e); }} onMouseLeave={e => { leave(e); }} variant="top" src="/images/blue-hover.svg" className="" />
                            </div>
                            <Card.Body>
                                <Card.Title bsPrefix="align-center">EV Charging</Card.Title>
                                <h6 className="section-2-card-content" id="01">
                                    The best part of Axonify chargers? They are easy to use! Available in both AC and DC types, our EV chargers also support Bharat TV and Type 2 charing.<span id="11"> ...</span><br /><br />
                                    <span className="dis-none" id="12">OCPP 1.6 (json) is supported for public AC and DC chargers- for the convenience of the users.<br /><br />
                                        Our mobile app can be exclusively used to monitor and manage the charging process.<br /><br />
                                        We offer flexible payment options such as Credit/Debit cards. Netbanking, and post-paid methods as well.<br /><br />
                                        Chargers are available for Home, Apartment and public use.</span>

                                </h6>
                                <Button id="b1" text="12" head="01" dots="11" onClick={e=>{myfunc(e);}} className="btn-bg medium" variant="primary">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="d-flex flex-column justify-content-start align-items-center mb-3">
                        <Card bsPrefix="section-2-card" style={{}}>
                            <div className="h185 bg-hover-2">
                                <Card.Img id="2" onMouseEnter={e => { enter(e); }} onMouseLeave={e => { leave(e); }} variant="top" src="/images/blue-hover.svg" className="" />
                            </div>
                            <Card.Body>
                                <Card.Title bsPrefix="align-center">CMS Solution</Card.Title>
                                <h6 className="section-2-card-content " id="02" >
                                    Charging and maintaining the EVs is the biggest challenge that consumers face these days. The availability of reliable charging options should be installed <span id="21" className=""> ...</span>
                                    <span className="dis-none" id="22">in various points in proximity. <br /><br />
                                        CMS solution by Axonify offers the one-stop solution for the same.<br /><br />
                                        Charge Point Management system is greatly suitable for various public places such as apartments, car parking areas, and fleets.<br /><br />
                                        It aids the drivers/ users to monitor, manage and also view the past charging sessions and the details via mobile app. <br /><br />
                                        For additional security, it supports QR and RFID tag-based authentication. <br /><br />
                                        Forget the woes of charging your EVs with Axonify’s innovative CMS system.
                                    </span>

                                </h6>
                                <Button id="b2" text="22" head="02" dots="21" onClick={e=>{myfunc(e);}} className="btn-bg medium" variant="primary">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                    <Col className="d-flex flex-column justify-content-start align-items-center mb-3">
                        <Card bsPrefix="section-2-card" style={{}}>
                            <div className="h185 bg-hover-3">
                                <Card.Img id="3" onMouseEnter={e => { enter(e); }} onMouseLeave={e => { leave(e); }} variant="top" src="/images/blue-hover.svg" className="" />
                            </div>
                            <Card.Body>
                                <Card.Title bsPrefix="align-center">IoT (Agri & Industrial)</Card.Title>
                                <h6 className="section-2-card-content " id="03">
                                    Agriculture is one of the biggest professions of India that runs the country. Unfortunately, innovation in the field of tools used, and progress of the <span id="31"> ...</span>
                                    <span className="dis-none" id="32">cultivating methods haven’t progressed enough. <br /><br />
                                        Our innovative products are specifically developed to help the agricultural and industrial sectors and can be effortlessly managed with mobile applications. <br /><br />
                                        Motor Starters- AgriCell Mini<br /><br />
                                        AgriCell Max<br /><br />
                                        Weather and Vibration sensors
                                    </span>

                                </h6>
                                <Button id="b3" text="32" head="03" dots="31" onClick={e=>{myfunc(e);}} className="btn-bg medium" variant="primary">Read more</Button>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </>

        </div>
    );
}

export default Section2;