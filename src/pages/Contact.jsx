import React from 'react'
import Helmet from '../components/Helmet/Helmet'
import CommonSection from '../components/UI/CommonSection'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Form, FormGroup } from 'react-bootstrap'
import { motion } from 'framer-motion'
import '../styles/Contact.css'


const socialLinks = [
  {
    url: "#",
    icon: "ri-facebook-line"
  },
  {
    url: "#",
    icon: "ri-instagram-line"
  },
  {
    url: "#",
    icon: "ri-linkedin-line"
  },
  {
    url: "#",
    icon: "ri-twitter-line"
  }
]



const Contact = () => {
  return (
    <>
        <Helmet title="Contact">
            <CommonSection title="Contact"/>

            <section>
              <Container>
                <Row>
                  <Col lg="7" md="7">
                    <h6 className="fw-bold mb-4">Get In Touch</h6>

                    <Form>
                      <FormGroup className='contact-form'>
                        <input type="text" placeholder='Enter your name'/>
                      </FormGroup>

                      <FormGroup className='contact-form'>
                        <input type="email" placeholder='Enter your email'/>
                      </FormGroup>

                      <FormGroup className='contact-form'>
                        <textarea rows={5} placeholder="Write Message" className='textarea'></textarea>
                      </FormGroup>

                      <motion.button whileTap={{ scale: 1.1 }} className="contact-btn" type='submit'>Send Message</motion.button>
                    </Form>
                  </Col>

                  <Col lg="5" md="5">
                      <div className="contact-info">
                        <h6 className="fw-bold">Contact Information</h6>
                        <p className="section-description mb-0">Grace Court Estate, Yaba, Lagos State.</p>

                        <div className="d-flex align-items-center gap-2">
                          <h6 className="fs-6 mb-0">Phone:</h6>
                          <p className="section-description mb-0">+2348119292443</p>
                        </div>

                        <div className="d-flex align-items-center gap-2">
                          <h6 className="fs-6 mb-0">Email:</h6>
                          <p className="section-description">femzyfadayomi@gmail.com</p>
                        </div>

                        <h6 className="fw-bold mt-4">Follow Us</h6>

                        <div className="d-flex align-items-center gap-4 mt-3">
                          {socialLinks.map((item) => (
                              <Link to={item.url} key={item.id} className="social-link-icon"><i className={item.icon}></i></Link>
                          ))}
                        </div>
                      </div>
                  </Col>
                </Row>
              </Container>
            </section>
        </Helmet>
    </>
  )
}

export default Contact