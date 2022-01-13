import React from "react";
import "./landing.css";
import Section1 from "../../components/section-1/section1";
import Section2 from "../../components/section-2/section-2";
import Section3 from "../../components/section-3/section-3";


function LandingPage() {
    return (
        <>
        <div className="landing-page">
            <Section1/>
            <Section2/>
            <Section3/>
        </div>
        </>
    );
}

export default LandingPage;