import React from 'react'
import './Findcarform.css'
import { Form, FormGroup } from 'react-bootstrap'
import { motion } from 'framer-motion'


const FindCarForm = () => {
  return (
    <>
      <Form className='form'>
        <div className="d-flex align-items-center justify-content-between flex-wrap">
          <FormGroup className='form-group'>
            <input type="text" placeholder='From address' required/>
          </FormGroup>
 
          <FormGroup className='form-group'>
            <input type="text" placeholder='To address' required/>
          </FormGroup>

          <FormGroup className='form-group'>
            <input type="time" className='journey-time' placeholder='Journey time' required/>
          </FormGroup>

          <FormGroup className='form-group'>
            <input type="date" placeholder='Journey date' className='journey-date' required/>
          </FormGroup>

          <FormGroup className='select-group'>
            <select>
              <option value="ac">AC Car</option>
              <option value="non-ac">Non AC Car</option>
            </select>
          </FormGroup>

          <FormGroup className='form-group'>
            <motion.button whileTap={{ scale: 1.2}} className=" car-btn">Find Car</motion.button>
          </FormGroup>
        </div>
      </Form>
    </>
  )
}

export default FindCarForm