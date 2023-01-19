import React from 'react'
import { Container, Row, Col, Form, FormGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../styles/Register.css'
import { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { motion } from 'framer-motion'

import {getAuth, createUserWithEmailAndPassword, updateProfile} from 'firebase/auth'
import { setDoc, doc, serverTimestamp} from 'firebase/firestore'
import { db } from '../firebase.config'
import { toast } from 'react-toastify'
import Spinner from '../components/Spinner'



const Register = () => {
  const [loading, setLoading] = useState(false)
  const [showPassword, setShowPassword] = useState(false)
  const [formData, setFormData] = useState({
    name:'',
    email:'',
    password:''
  })

  const {name, email, password} = formData

  const navigate = useNavigate()

  const onChange = (e) => {
      setFormData((prevState) => ({
        ...prevState,
        [e.target.id]: e.target.value
      }))
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    setLoading(true)


    try {
      const auth = getAuth( )

      const userCredential = await createUserWithEmailAndPassword(auth, email, password)

      const user = userCredential.user

      updateProfile(auth.currentUser, {
        displayName: name,
      })

      const formDataCopy = {...formData}
      delete formDataCopy.password
      formDataCopy.timestamp = serverTimestamp()

      await setDoc(doc(db, "users", user.uid), formDataCopy)

      setLoading(false)
      toast.success('Account created successfully')
      navigate('/login')
    } catch (error) {
      toast.error('Something went wrong with registration')
     ` setLoading(false)`
    } 
  }
    

  return (
    <>
      <Helmet title="Register">
         
         <section>
          <Container>
            <Row>
              {loading ? ( <Spinner />
              ) : ( 
                <Col lg="6" className='m-auto text-center'>
                <h3 className="fw-bold fs-4 mb-4">Create an Account</h3>

                <Form className='auth-form' onSubmit={onSubmit}>
                  <FormGroup className='form-group mb-3 w-100'>
                    <input type="text" placeholder='Enter username' value={name} onChange={onChange} id="name"/>
                  </FormGroup>

                  <FormGroup className='form-group mb-3 w-100'>
                    <input type="email" placeholder='Enter your email' value={email} onChange={onChange} id="email"/>
                  </FormGroup>

                  <FormGroup className='form-group mb-3 w-100'>
                    <input type="password" placeholder='Enter your password' value={password} onChange={onChange} id="password"/>
                  </FormGroup>

                  <motion.button whileTap={{ scale: 1.1 }} type="submit" className="submit-btn auth-btn">Register </motion.button>
                  <p>Already have an account? <Link to="/login">Log In</Link></p>
                </Form>
              </Col>
              )
            }
            </Row>
          </Container>
         </section>
      </Helmet>
    </>
  )
}

export default Register