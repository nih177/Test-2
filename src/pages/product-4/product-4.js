import React from "react";
import { Row, Col, Container, Carousel } from "react-bootstrap";
import YouTube from 'react-youtube';
import './product-4.css'
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Product4() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);

    const opts = {
        height: '400px',
        width: '100%',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 0,
        },
    };

    function myfun(e) {
        console.log("HHello");
        console.log(e);
    }
    return (
        <div className="">
            <div className="bg-bg dummy-height p30 d-flex align-items-center justify-content-center">
                <div className="product-2-content-container h100vh-dummy">
                    <Row className="mt-4 w99p">
                        <div className="h40 h-dn"></div>
                        <Col md={6} className="d-flex col-md-6 align-items-center justify-content-center">
                            <Carousel  className="d-flex  align-items-center justify-content-center">
                                <Carousel.Item interval={2000}>
                                    <img
                                        className="d-block w60p ml20p"
                                        src="/images/p-4-1.svg"
                                        alt="First slide"
                                    />

                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img
                                        className="d-block w-100"
                                        src="/images/p-4-2.svg"
                                        alt="Second slide"
                                    />


                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img
                                        className="d-block w-100"
                                        src="/images/p-4-3.svg"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col md={6} className="d-flex align-items-center justify-content-center">
                            <div className="d-flex flex-column">
                                <span className="p-headings text-blue medium">AgriCell</span>
                                <span className="medium">AGRI001</span>
                                <div className="h20"></div>
                                <span className="medium">AgriCell Dost provides remote connectivity to your</span>
                                <span className="medium">Motor so that you can control it from the comfort</span>
                                <span className="medium">of your home or anywhere with Cellular connectivity.</span>
                                <div className="h20 "></div>
                                <div className="icon-box-row">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6>Single Phase Preventer</h6>
                                </div>
                                <div className="icon-box-row">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6>Dry Run Cut Off</h6>
                                </div>
                                <div className="icon-box-row">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6>Overload Protection</h6>
                                </div>
                                <div className="icon-box-row">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6>SMS based ON / OFF</h6>
                                </div>
                                <div className="icon-box-row">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6>Timer Slots</h6>
                                </div>
                                {/* <div className="h20 h-dn"></div> */}
                                <div className="h20"></div>
                                <span className="mb-2 medium">Support</span>
                                <div className="h10 "></div>
                                <div className="d-flex flex-row">
                                    <button className="btn btn-primary btn-bg medium">Get Price Quotation</button>
                                    <div className="w20"></div>
                                    <button className="btn btn-primary btn-bg medium">Download Brocher</button>
                                </div>
                                <div className="d-flex flex-row mt-3">
                                    <button className="btn btn-primary btn-bg medium">Manufacture information</button>
                                    <div className="w20"></div>
                                    <button className="btn btn-primary btn-bg medium">Warranty Policy</button>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="p-2-section-3">
                <YouTube videoId="-_FFOr-81xw" opts={opts} />
            </div>
            <div className="p-2-section-3 p30">
                <div className="h20 h-dn"></div>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <h6 className="p-headings text-center">Connect, Charge, Go</h6>
                    <span className="w60p w80-dummy d-flex flex-column justify-content-center align-items-center text-center medium">To meet the massive EV adoption plans of the government of India, Charging Infrastructure plays a key role.</span>
                    <span className="w60p w80-dummy d-flex flex-column justify-content-center align-items-center text-center medium">We are working on modular and robust solutions to support various standards in the EV industry.</span>
                </div>
                <div className="h35 h-dn"></div>
                <div className="h35"></div>
                <Row className="w99p">
                    <Col md={6} className="d-flex align-items-center justify-content-start">
                        <div className="h20p h-dn"></div>
                        <div className="d-block  pl15p ml20p-dummy">
                            <div className="d-flex flex-column">
                                <h6 className="p-headings ">Smart</h6>
                                <h6 className="p-headings  line-height-0 mb-2">Protections</h6>
                            </div>
                            <div className="ml-4">
                                <div className="h10 h-dn"></div>
                                <div className="icon-box-row  ">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6>Single Phase Preventer</h6>
                                </div>
                                <div className="icon-box-row ">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6>Timer Slots</h6>
                                </div>
                                <div className="icon-box-row ">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6>Overload Protection</h6>
                                </div>
                            </div>
                        </div>

                    </Col>
                    <Col className="overflow-hidden" md={6}>
                        <img data-aos="fade-left" src="/images/p-4-2.svg" className="w99p" />
                    </Col>
                </Row>
                <Row className="w99p">
                    <Col md={1} sm={12}></Col>
                    <Col className="d-flex justify-content-center order-2 overflow-hidden" md={5}>
                        <img data-aos="fade-left" src="/images/p-4-3.svg" className="w99p" />
                    </Col>
                    <Col md={6} sm={12} className="d-flex align-items-center justify-content-start order-1">
                        <div className="h20p h-dn"></div>
                        <div className="h10p h-dn"></div>
                        <div className="d-block mt-auto mb-auto pl15p">
                            <h6 className="p-headings ">Controls</h6>
                            <div className="h10 h-dn"></div>
                            <div className="medium w80p">
                                7 Inch FHD Touch Display With Simple User Interface
                            </div>
                        </div>
                    </Col>
                </Row>
                <Row className="w99p">
                    <Col md={6} className="d-flex align-items-center justify-content-start">
                        <div className="h20p h-dn"></div>
                        <div className="h10p h-dn"></div>
                        <div className="d-block  pl15p ml20p-dummy">
                            <div className="mb-2">
                                <h6 className="p-headings line-height-0">Smart</h6>
                                <h6 className="p-headings line-height-0 ">Payment Options</h6>
                            </div>
                            <div className="h20 h-dn"></div>
                            <div className="ml-4 mt-2">
                                <h6>CMS Communication & App-based Payment</h6>
                                <div className="h10"></div>
                                <div className="h5px"></div>
                                <div className="icon-box-row  ">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6>Smart Card Reader</h6>
                                </div>
                                <div className="icon-box-row ">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6>App-based Payment gateway</h6>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="overflow-hidden" md={6}>
                        <img data-aos="fade-left" src="/images/p-4-4.svg" className="w99p" />
                    </Col>
                </Row>

                <Row className="">
                    <Col md={1}></Col>
                    <Col className="d-flex align-items-center justify-content-start order-2 overflow-hidden" md={5}>
                        <img data-aos="fade-left" src="/images/p-4-1.svg" className="w90p" />
                    </Col>
                    <Col md={6} className="order-1">
                        <div className="d-block mt-auto mb-auto pl15p">
                            <div className="h10p h-dn"></div>
                            <h6 className="p-headings line-height-0">Technical Specifications</h6>
                            <span className="mt-2 medium">ATOM DC CHARGER 35KW</span>
                            <div className="h20"></div>
                            <div className="d-block">
                                <table class="table table-borderless w90p">
                                    <thead>
                                        <tr className="bg-dark-blue text-white">
                                            <th scope="col medium">Specification</th>
                                            <th scope="col medium">Description</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td>Mains Topology</td>
                                            <td>3 Phase - 3 Wire ( 360 V to 488 V )W</td>
                                        </tr>
                                        <tr className="border-black">
                                            <td>Types Of Starters</td>
                                            <td>DOL ( Upto 7.5 HP ) , Star Delta<br />( 7.5 HP to 15 HP )</td>
                                        </tr>
                                        <tr>
                                            <td>Current Range</td>
                                            <td>1 to 22 Amps, configurable as per<br />pump horse power.</td>
                                        </tr>
                                        <tr className="border-black">
                                            <td>Sim Cards Supported</td>
                                            <td>2G ( GSM, GPRS )<br />Temperature</td>
                                        </tr>
                                        <tr>
                                            <td>Protection Degree</td>
                                            <td>IP54, IP65</td>
                                        </tr>

                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </Col>
                </Row>
            </div>
            <div className="bg-blus d-flex flex-row p30 pb50  row ml0i mr0i ">
                <Col md={12} className="d-flex text-center flex-column">
                    <h1 className="bold  white">Application Areas</h1>
                    <h6 className="align-center white mb-4">Atom AC Wallbox 7.2 KW is suitable for as small parking places</h6>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <img src="/images/second/1.svg"></img>
                    <span className="bold text-white">Apartments</span>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <img src="/images/second/2.svg"></img>
                    <span className="bold text-white">Office</span>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <img src="/images/second/3.svg"></img>
                    <span className="bold text-white">Commerical</span>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <img src="/images/second/4.svg"></img>
                    <span className="bold text-white">Public</span>
                </Col>
            </div>
            <div className="p-2-section-4 p30">
                <div className="h25 h-dn"></div>
                <Row>
                    <Col className="d-flex flex-column justify-content-start align-items-center w50p ml10-dummy">
                        <img className="w40p mt-1" src="/images/download.svg"></img><div className="h10"></div>
                        <span className="mt-2 medium lite-black">Download</span><div className="h10"></div>
                        <button className="w200 btn btn-primary btn-bg">Brochere User Manual</button>
                    </Col>
                    <Col className="d-flex flex-column justify-content-start align-items-center w50p ml50">
                        <img className="w40p" src="/images/headphones.svg"></img><div className="h10"></div>
                        <span className="medium lite-black">Place an Order</span><div className="h10"></div>
                        <button className="w200 btn btn-primary btn-bg">Get in Touch</button>
                    </Col>
                </Row>
                <div className="h25"></div>
            </div>
        </div>
    );
}