import React from 'react'
import './Paymentmethod.css'
import mastercard from '../../assets/all-images/master-card.jpg'
import Paypal from '../../assets/all-images/paypal.jpg'
import { motion } from 'framer-motion'

const PaymentMethod = () => {
  return (
    <>
        <div className="payment">
            <label htmlFor="" className="d-flex align-items-center gap-2">
                <input type="radio" /> Direct Bank Transfer
            </label>
        </div>

        <div className="payment mt-3">
            <label htmlFor="" className="d-flex align-items-center gap-2">
                <input type="radio" /> Cheque Payment
            </label>
        </div>

        <div className="payment mt-3 d-flex align-items-center justify-content-between">
            <label htmlFor="" className="d-flex align-items-center gap-2">
                <input type="radio" /> Master Card
            </label>

            <img src={mastercard} alt="" />
        </div>

        <div className="payment mt-3 d-flex align-items-center justify-content-between">
            <label htmlFor="" className="d-flex align-items-center gap-2">
                <input type="radio" /> Paypal
            </label>

            <img src={Paypal} alt="" />
        </div>

        <div className='payment text-end mt-5'>
            <motion.button whileTap={{ scale: 1.1 }}>Reserve Now</motion.button>
        </div>
    </>
  )
}

export default PaymentMethod