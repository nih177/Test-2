import React from "react";
import { Row, Col, Container, Carousel } from "react-bootstrap";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
export default function Product3() {
    useEffect(() => {
        Aos.init({ duration: 2000 });
    }, []);
    return (
        <div className="">
            <div className="bg-bg dummy-height p30 d-flex align-items-center justify-content-center">
                <div className="product-2-content-container">
                    <Row className="mt-4 w99p">
                        <div className="h40 "></div>
                        <Col md={6} className="d-flex col-md-6 align-items-center justify-content-center">
                            <Carousel >
                                <Carousel.Item interval={2000}>
                                    <img
                                        className="d-block w-100"
                                        src="/images/p-3-1.svg"
                                        alt="First slide"
                                    />

                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img
                                        className="d-block w-100"
                                        src="/images/p-3-2.svg"
                                        alt="Second slide"
                                    />


                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img
                                        className="d-block w-100"
                                        src="/images/p-3-6.svg"
                                        alt="Third slide"
                                    />


                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img
                                        className="d-block w-100"
                                        src="/images/p-3-3.svg"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                                <Carousel.Item interval={2000}>
                                    <img
                                        className="d-block w-100"
                                        src="/images/p-3-4.svg"
                                        alt="Third slide"
                                    />
                                </Carousel.Item>
                            </Carousel>
                        </Col>
                        <Col md={6}>
                            <div className="d-flex flex-column">
                                <span className="p-headings text-blue medium">Atom Public</span>
                                <span className="p-headings lite-black line-height-0">AC Charger 7.2KW</span>
                                <div className="h5"></div>
                                <span className="medium">AXBOX001</span>
                                <div className="h20"></div>
                                <h6 className="w80p">This sleek designed Public AC Charger offers all the charging requirements in a robust, and secure manner.
                                    Some of the attractive features of the product:
                                    Compact Design: Sleek and stylish, it occupies less place for installation
                                    Multigun Feature: Charge multiple EVs at once- thereby saving time
                                    Easy User Interface:  Excellent user interface that is helpful for first-time users as well
                                    High Quality: Made with high quality build, and strong raw-materials, the charger is durable and reliable.</h6>
                                {/* <h6>solutions with</h6> */}
                                <div className="h20 "></div>
                                <div className="icon-box-row">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6 className="w80p">Compact Design: Sleek and stylish, it occupies less place for installation</h6>
                                </div>
                                <div className="icon-box-row">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6 className="w80p">Multigun Feature: Charge multiple EVs at once- thereby saving time</h6>
                                </div>
                                <div className="icon-box-row">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6 className="w80p">Easy User Interface:  Excellent user interface that is helpful for first-time users as well</h6>
                                </div>
                                <div className="icon-box-row">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6 className="w80p">High Quality: Made with high quality build, and strong raw-materials, the charger is durable and reliable</h6>
                                </div>
                                <div className="icon-box-row">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6 className="w80p">Charge Reliably- Away from the home</h6>
                                </div>
                                <div className="d-flex flex-row medium mt-2">
                                    <div className="d-block">
                                        Capacity<br />
                                        <button className="mt-1 btn btn-primary btn-bg">3.3 to 7.2kw</button>
                                    </div>
                                    <div className="w20"></div>
                                    <div className="d-block">
                                        Color<br />
                                        <button className="mt-1 btn btn-primary btn-bg">Deep Blue + White</button>
                                    </div>
                                </div>
                                {/* <div className="h20 h-dn"></div> */}
                                <div className="h20"></div>
                                <span className="medium">Support</span>
                                <div className="h10"></div>
                                <div className="d-flex flex-row">
                                    <button className="btn btn-primary btn-bg">Get Price Quotation</button>
                                    <div className="w20"></div>
                                    <button className="btn btn-primary btn-bg">Download Brocher</button>
                                </div>
                                <div className="mt-3"></div>
                                <div className="d-flex flex-row">
                                    <button className="btn btn-primary btn-bg">Manufacture information</button>
                                    <div className="w20"></div>
                                    <button className="btn btn-primary btn-bg">Warranty Policy</button>
                                </div>

                            </div>
                        </Col>
                    </Row>
                </div>
            </div>
            <div className="bg-blus d-flex flex-row p30 row ml0i mr0i">
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <img src="/images/first/1.svg"></img>
                    <span className="bold text-white text-center">3inch  (76.2cm)</span>
                    <span className="bold text-white text-center">Display</span>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center mb24">
                    <img src="/images/first/2.svg"></img>
                    <span className="bold text-white text-center">LED Indicator Lights</span>
                    <div className=""></div>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <img src="/images/first/3.svg"></img>
                    <span className="bold text-white text-center">Connectors</span>
                    <span className="bold text-white text-center">Type2 AC (IEC 62196)</span>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <img src="/images/first/4.svg"></img>
                    <span className="bold text-white text-center">Server Connectivity</span>
                    <span className="bold text-white text-center">OCPP 2.0</span>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <img src="/images/first/5.svg"></img>
                    <span className="bold text-white text-center">Atom EV</span>
                    <span className="bold text-white text-center">Andriod Application</span>
                </Col>
                <Col className="d-flex flex-column justify-content-center align-items-center">
                    <img src="/images/first/6.svg"></img>
                    <span className="bold text-white text-center">IP65, IP54</span>
                    <span className="bold text-white text-center">Metal Enclosure</span>
                </Col>
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
                        <div className="h10p h-dn"></div>
                        <div className="d-block  pl15p ml20p-dummy">
                            <div className="mb-2">
                                <h6 className="p-headings line-height-0">Multi Gun Supported</h6>
                            </div>
                            <div className="h20 h-dn"></div>
                            <div className="ml-4 mt-2">
                                <h6>Atom AC Charger support 3 different charging protocals i.e,</h6>
                                <div className="h10"></div>
                                <div className="h5px"></div>
                                <div className="icon-box-row  ">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6>Bharath AC001</h6>
                                </div>
                                <div className="icon-box-row ">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6>J1772</h6>
                                </div>
                                <div className="icon-box-row ">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6>Type2 AC</h6>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="overflow-hidden" md={6}>
                        <img data-aos="fade-left" src="/images/p-3-2.svg" className="w99p mb-3" />
                    </Col>
                </Row>
                <Row className="w99p">
                    <Col md={1} sm={12}></Col>
                    <Col className="d-flex justify-content-center order-2 overflow-hidden" md={5}>
                        <img data-aos="fade-left" src="/images/p-3-6.svg" className="w80p mb-3" />
                    </Col>
                    <Col md={6} sm={12} className="d-flex align-items-center justify-content-start order-1">
                        <div className="h20p h-dn"></div>
                        <div className="h10p h-dn"></div>
                        <div className="d-block mt-auto mb-auto pl15p">
                            <h6 className="p-headings line-height-0">Digital</h6>
                            <h6 className="p-headings line-height-0 ">User Interface</h6>
                            <div className="h10 h-dn"></div>
                            <div className="medium">
                                <div className="w80p">
                                    The 7-inch FHD touch display brings a new edge to the user interface that is simple to use even for the first-timer.<br /><br />
                                </div>
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
                                    <h6>Smart Card Reader allows you to pay well within less time</h6>
                                </div>
                                <div className="icon-box-row ">
                                    <img src="/images/feature.png" className="p-2feature-icon" />
                                    &nbsp;
                                    <h6>App-based Payment gateway is highly secure and ensures your payment is done in a safe manners</h6>
                                </div>
                            </div>
                        </div>
                    </Col>
                    <Col className="overflow-hidden" md={6}>
                        <img data-aos="fade-left" src="/images/third.svg" className="w99p" />
                    </Col>
                </Row>
                <Row className="w99p">
                    <Col className="order-2 overflow-hidden" md={6}>
                        <img data-aos="fade-left" src="/images/p-3-3.svg" className="w99p " />
                    </Col>
                    <Col md={6} className="order-1 d-flex align-items-center justify-content-start">
                        {/* <div className="h20p"></div> */}
                        {/* <div className="h10p"></div> */}
                        <div className="d-block mt-auto mb-auto pl15p">
                            <div className="mb-2">
                                <h6 className="p-headings line-height-0">Compact</h6>
                                <h6 className="p-headings line-height-0 ">Design</h6>
                            </div>
                            <div className="h20"></div>
                            <h6 className="">
                                Suitable Pole Mount And Wall Mount Option<br />
                                High Quality Metal Enclosure With IP65, IP54
                            </h6>
                        </div>
                    </Col>
                </Row>
                <Row className="">
                    <Col md={1}></Col>
                    <Col className="d-flex align-items-center justify-content-start order-2 overflow-hidden" md={5}>
                        <img data-aos="fade-left" src="/images/p-3-4.svg" className="w90p mb-3" />
                    </Col>
                    <Col md={6} className="order-1">
                        <div className="d-block mt-auto mb-auto pl12p">
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
                                            <td>Output Power Rating (Max))</td>
                                            <td>3.3 kW, 7.2 kW... 22 kW</td>
                                        </tr>
                                        <tr className="border-black">
                                            <td>Input voltage range</td>
                                            <td>230V 1-Ph AC, 415V 3-Ph AC</td>
                                        </tr>
                                        <tr>
                                            <td>Connector Protocols</td>
                                            <td>Bharath AC001, J1772, Type2 AC,</td>
                                        </tr>
                                        <tr className="border-black">
                                            <td>Operating Tempature</td>
                                            <td>-20 C to 55 C</td>
                                        </tr>
                                        <tr>
                                            <td>Server Connectivity</td>
                                            <td>OCPP 1.6, 2.0*</td>
                                        </tr>
                                        <tr className="border-black">
                                            <td>Protection Degree</td>
                                            <td>IP54, IP65</td>
                                        </tr>
                                        <tr>
                                            <td>Connectivity</td>
                                            <td>3G, 4G, Ethernet</td>
                                        </tr>
                                        <tr className="border-black">
                                            <td>Payment System</td>
                                            <td>Smart Card & App based payment</td>
                                        </tr>
                                        <tr>
                                            <td>Dimensions</td>
                                            <td>-</td>
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