import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/mercedes-offer.png"; // Update image as needed

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to Our AutoGarage</h2>
              <p className="section__description">
                At our Vehicle Repair Hub, we provide top-notch repair and maintenance services for all types of vehicles. Our team of experienced technicians is dedicated to ensuring your vehicle is in optimal condition, offering services ranging from routine maintenance to complex repairs.
              </p>
              <p className="section__description">
                With years of experience in the industry, we pride ourselves on delivering exceptional service and results. Whether you're dealing with a minor issue or a major repair, we use the latest tools and technology to get the job done right.
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Expert diagnostics and repairs.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> High-quality parts and services.
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Fair & reliable repair and service.
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i className="ri-checkbox-circle-line"></i> Customer satisfaction guaranteed.
                </p>
              </div>

            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="Vehicle Repair" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;
