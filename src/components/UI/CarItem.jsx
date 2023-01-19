import React from 'react'
import './Caritem.css'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

const CatItem = (props) => {
    const { id, imgUrl, model, carName, automatic, speed, price } = props.item

  return (
    <>
        <Col lg="4" md="4" sm="6" className='mb-5'>
            <div className="car-item">
                <div className="car-img">
                    <img src={imgUrl} alt="" className='w-100'/>
                </div>

                <div className="car-item-content">
                    <h4 className="section-title text-center">{carName}</h4>
                    <h6 className="rent-price text-center">${price}.00 <span>/ Day</span></h6>

                    <div className="car-item-info d-flex aign-items-center justify-content-between mt-3 mb-4">
                        <span className="d-flex align-items-center gap-1">
                            <i class="ri-car-line"></i> {model}
                        </span>

                        <span className="d-flex align-items-center gap-1">
                            <i class="ri-settings-2-line"></i> {automatic}
                        </span>

                        <span className="d-flex align-items-center gap-1">
                            <i class="ri-timer-line"></i> {speed}
                        </span>
                    </div>

                    <motion.button whileTap={{ scale: 1.1 }} className="w-50 car-item-btn car-btn-rent">
                        <Link to={`/cars/${carName}`}>Rent</Link>
                    </motion.button>

                    <motion.button  whileTap={{ scale: 1.1 }} className="w-50 car-item-btn car-btn-details">
                        <Link to={`/cars/${carName}`}>Details</Link>
                    </motion.button>
                </div>
            </div>
        </Col>
    </>
  )
}

export default CatItem