import React from "react";

import CommonSection from "../components/UI/CommonSection";
import Helmet from "../components/Helmet/Helmet";
import AboutSection from "../components/UI/AboutSection";
import { Container, Row, Col } from "reactstrap";

import driveImg from "../assets/all-images/drive.jpg";
import OurMembers from "../components/UI/OurMembers";
import "../styles/about.css";

const About = () => {
  return (
    <Helmet title="About">
      <CommonSection title="About Us" />
      <AboutSection aboutClass="aboutPage" />

      <section className="about__page-section">
        <Container>
          <Row>
            <Col lg="6" md="6" sm="12">
              <div className="about__page-img">
                <img src={driveImg} alt="Our Driving Services" className="w-100 rounded-3" />
              </div>
            </Col>

            <Col lg="6" md="6" sm="12">
              <div className="about__page-content">
                <h2 className="section__title">
                  Committed to Delivering Outstanding Vehicle Repair Solutions
                </h2>

                <p className="section__description">
                  At AutoCarage, we take pride in offering top-quality vehicle repair and maintenance services. Our experienced technicians are dedicated to ensuring that your vehicle operates smoothly and safely, using the latest technology and premium parts.
                </p>

                <p className="section__description">
                  With a reputation for reliability and excellence, we cater to all your vehicle needs, from routine maintenance to complex repairs. Our goal is to provide you with a hassle-free experience and get you back on the road with confidence.
                </p>

                <div className="d-flex align-items-center gap-3 mt-4">
                  <span className="fs-4">
                    <i className="ri-phone-line"></i>
                  </span>

                  <div>
                    <h6 className="section__subtitle">Need Assistance?</h6>
                    <h4>+00123456789</h4>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <section>
        <Container>
          <Row>
            <Col lg="12" className="mb-5 text-center">
              <h6 className="section__subtitle">Our Team</h6>
              <h2 className="section__title">Meet Our Experts</h2>
            </Col>
            <OurMembers />
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default About;
