import React from 'react'
import './Footer.css'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const quickLinks = [
  {
    path: '/about',
    display: 'About'
  },
  {
    path: '#',
    display: 'Privacy Policy'
  },
  {
    path: '/cars',
    display: 'Car Listing'
  },
  {
    path: '/blogs',
    display: 'Blog'
  },
  {
    path: '/contact',
    display: 'Contact'
  }
]

const Footer = () => {

  const date = new Date()
  const year = date.getFullYear()

  return (
    <>
      <footer className="footer">
        <Container>
          <Row>
            <Col lg="4" md="4" sm="12">
              <div className="logo footer-logo">
                <h1>
                  <Link to='/home' className='d-flex align-items-center gap-2'>
                    <i class="ri-car-line"></i>
                    <span>
                      Fad Car <br /> Service
                    </span>
                  </Link>
                </h1>
              </div>
              <p className="footer-logo-content">
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ullam velit omnis alias deserunt laudantium eum temporibus accusantium officiis nulla repellat.
              </p>
            </Col>

            <Col lg='2' md='4' sm='6'>
              <div className="mb-4">
                <h5 className="footer-title">Quick Links</h5>
                <ListGroup >
                  {quickLinks.map((item, index) => (
                      <ListGroupItem key={index} className="p-0 mt-3  quick-link">
                        <Link to={item.path}>{item.display}</Link>
                      </ListGroupItem>
                  ))}
                </ListGroup>
              </div>
            </Col>

            <Col lg='3' md='4' sm='6'>
                    <div className="mb-4">
                      <h5 className="footer-title mb-4">Head Offcie</h5>
                      <p className="office-info">Grace Court Estate, Makoko road, Lagos, Nigeria</p>
                      <p className="office-info">Phone: +2348119292443</p>
                      <p className="office-info">Email: femzyfadayomi@gmail.com</p>
                      <p className="office-info">Office Time: 10am - 8pm</p>
                    </div>
            </Col>

            <Col lg="3" md="4" sm="12">
                    <div className="mb-4">
                      <h5 className="footer-title">Newsletter</h5>
                      <p className="section-description">Subscribe to our Newsletter</p>
                      <div className="newsletter">
                        <input type="email" placeholder='Email' />
                        <span>
                          <i class="ri-send-plane-2-line"></i>
                        </span>
                      </div>
                    </div>
            </Col>

            <Col lg="12">
                  <div className="footer-bottom">
                    <p className="section-description d-flex align-items-center justify-content-center pt-5 gap-1">
                    <i class="ri-copyright-line"></i> Copyright {year}, Developed by Oluwafemi Fadayomi. All rights reserved.
                    </p>
                  </div>
            </Col>
          </Row>
        </Container>
      </footer>
    </>
  )
}

export default Footer