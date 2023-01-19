import React from 'react'
import './Becomedriver.css'
import { Container, Row, Col } from 'react-bootstrap'
import driverImg from '../../assets/all-images/cars-img/toyota-offer-2.png'
import { motion } from 'framer-motion'

const BecomeDriver = () => {
  return (
    <>
        <div className="section become-driver">
            <Container>
                <Row>
                    <Col lg='6' md='6' sm='12' className='become-driver-img'>
                        <img src={driverImg} alt="" className='w-100'/>
                    </Col>

                    <Col lg='6' md='6' sm='12'>
                        <h2 className="section-title become-driver-title">
                            Do You Want to Earn With Us? So Don't Be Late
                        </h2>

                        <motion.button whileTap={{ scale: 1.1 }} className=" become-driver-btn mt-4">
                            Become a Driver
                        </motion.button>
                    </Col>
                </Row>
            </Container>
        </div>
    </>
  )
}

export default BecomeDriver