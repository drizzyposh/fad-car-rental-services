import React from 'react'
import './Aboutsection.css'
import { Container, Row, Col } from 'react-bootstrap'
import aboutImg from '../../assets/all-images/cars-img/nissan-offer.png'

const AboutSection = ({ aboutClass}) => {
  return (
    <>
        <section className='about-section' style={aboutClass === 'aboutPage' ? {marginTop: '0px'} : {marginTop: '280px'}}>
            <Container>
                <Row>
                    <Col lg="6" md="6">
                        <div className="about-section-content">
                            <h4 className="section-subtitle">About Us</h4>
                            <h2 className="section-title">Welcome to Fad car service</h2>
                            <p className="section-description">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptas amet ea quisquam cumque velit illum voluptatibus, alias consequatur animi fugit consequuntur quasi minus cupiditate, iure, atque sapiente similique aliquam quaerat pariatur in quae! Provident in laudantium illo praesentium repudiandae.</p>

                            <div className="about-section-item d-flex align-item-center">
                                <p className="section-description d-flex align-items-center gap-2">
                                 <i class="ri-check-line"></i>Lorem ipsum dolor sit amet.
                                </p>
                                
                                <p className="section-description d-flex align-items-center gap-2">
                                 <i class="ri-check-line"></i>Lorem ipsum dolor sit amet.
                                </p>
                            </div>

                            <div className="about-section-item d-flex align-item-center">
                                <p className="section-description d-flex align  -items-center gap-2">
                                 <i class="ri-check-line"></i>Lorem ipsum dolor sit amet.
                                </p>

                                <p className="section-description d-flex align-items-center gap-2">
                                 <i class="ri-check-line"></i>Lorem ipsum dolor sit amet.
                                </p>
                            </div>
                        </div>
                    </Col>

                    <Col lg="6" md="6">
                        <div className="about-img">
                            <img src={aboutImg} alt="" className='w-100'/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>
    </>
  )
}

export default AboutSection