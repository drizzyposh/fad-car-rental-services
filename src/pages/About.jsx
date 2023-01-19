import React from 'react'
import '../styles/About.css'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import AboutSection from '../components/UI/AboutSection'
import BecomeDriver from '../components/UI/BecomeDriver'
import { Container, Row, Col  } from 'react-bootstrap'
import driveImg from '../assets/all-images/drive.jpg'
import OurMembers from '../components/UI/OurMembers'



const About = () => {
  return (
    <>
      <Helmet title="About ">
        <CommonSection title="About Us"/>
        <AboutSection aboutClass="aboutPage" />  

        <div className="about-section">
          <Container>
            <Row>
              <Col lg="6" md="6" sm="12">
                <div className="about-img">
                  <img src={driveImg} alt="" className='w-100 rounded-3 pb-4' />
                </div>
              </Col>

              <Col lg="6" md="6" sm="12">
                  <div className="about-img-content">
                    <h2 className="section-title">We Are Commited To Provide Safe Ride Solutions</h2> 

                    <p className='section-description'>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab expedita ipsum fugit exercitationem vero aspernatur magnam pariatur recusandae excepturi quidem aliquid similique aut est voluptates totam quis, magni aperiam error.
                    </p>
                    <p className='section-description'>
                      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab expedita ipsum fugit exercitationem vero aspernatur magnam pariatur recusandae excepturi quidem aliquid similique aut est voluptates totam quis, magni aperiam error.
                    </p>

                    <div className='d-flex align-items-center gap-3 mt-4'>
                      <span><i className='ri-phone-line'></i></span>

                      <div>
                        <h6 className="section-subtitle">Need any assistance?</h6>
                        <h4>+2348119292443</h4>
                    </div>
                    </div>
                  </div>
              </Col>
            </Row>
          </Container>
        </div>

        <BecomeDriver />

        <section>
          <Container>
            <Row>
              <Col lg="12" className='mb-5 text-center'>
                <h6 className="section-subtitle">Experts</h6>
                <h2 className="section-title">Our Members</h2>
              </Col>

              <OurMembers />
            </Row>
          </Container>
        </section>
      </Helmet>
    </>
  )
}

export default About