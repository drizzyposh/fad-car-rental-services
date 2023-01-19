import React from 'react'
import './BookingForm.css'
import { Form, FormGroup } from 'react-bootstrap'

const BookingForm = () => {

    const submitHandler = (e) => {
        e.preventDefault();


    }

  return (
    <>
        <Form onSubmit={submitHandler}>
            <FormGroup className='booking-form d-inline-block me-4 mb-4'>
                <input type="text" placeholder='First Name'/>
            </FormGroup>

            <FormGroup className='booking-form d-inline-block ms-1 mb-4'>
                <input type="text" placeholder='Last Name'/>
            </FormGroup>

            <FormGroup className='booking-form d-inline-block me-4 mb-4'>
                <input type="email" placeholder='Email'/>
            </FormGroup>

            <FormGroup className='booking-form d-inline-block ms-1 mb-4'>
                <input type="number" placeholder='Phone Number'/>
            </FormGroup>

            <FormGroup className='booking-form d-inline-block me-4 mb-4'>
                <input type="text" placeholder='From Address'/>
            </FormGroup>

            <FormGroup className='booking-form d-inline-block ms-1 mb-4'>
                <input type="text" placeholder='To Address'/>
            </FormGroup>

            <FormGroup className='booking-form d-inline-block me-4 mb-4'>
                <select>
                    <option value="1 person">1 Person</option>
                    <option value="2 person">2 Person</option>
                    <option value="3 person">3 Person</option>
                    <option value="4 person">4 Person</option>
                    <option value="5+ person">5+ Person</option>
                </select>
            </FormGroup>

            <FormGroup className='booking-form d-inline-block ms-1 mb-4'>
                <select >
                    <option value="1 luggage">1 luggage</option>
                    <option value="2 luggage">2 luggage</option>
                    <option value="3 luggage">3 luggage</option>
                    <option value="4 luggage">4 luggage</option>
                    <option value="5+ luggage">5+ luggage</option>
                </select>
            </FormGroup>

            <FormGroup className='booking-form d-inline-block me-4 mb-4'>
                <input type="date" placeholder='Journey Date'/>
            </FormGroup>

            <FormGroup className='booking-form d-inline-block ms-1 mb-4'>
                <input type="time" placeholder='Journey Time' className='time-picker'/>
            </FormGroup>

            <FormGroup className='booking-form d-inline-block ms-1 mb-4'>
                <textarea type="textarea" rows={5} className="textarea" placeholder='Write'></textarea>
            </FormGroup>
        </Form>
    </>
  )
}

export default BookingForm