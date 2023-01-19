import React from 'react'
import { Container, Row, Col, Form, FormGroup } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { useNavigate } from 'react-router-dom'
import '../styles/Register.css'
import { useState } from 'react'
import Helmet from '../components/Helmet/Helmet'
import { motion } from 'framer-motion'
import Spinner from '../components/Spinner'

import { getAuth, signInWithEmailAndPassword } from 'firebase/auth'
import { toast } from 'react-toastify'

const Login = () => {
  const [loading, setLoading] = useState(false)
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
    e.preventDefault()
    setLoading(true)

    try {
      const auth = getAuth()

      const userCredential = await signInWithEmailAndPassword(auth, email, password)

      if(userCredential.user) {
        toast.success('Logged in successfully')
        navigate('/')
        setLoading(false)
      }

    } catch (error) {
      toast.error('Bad user credentials')
      setLoading(false)
    }


  }

  return (
    <>
      <Helmet title="Login">

        <section>
          <Container>
            <Row>
              {loading ? ( <Spinner />
              ) : (
                <Col lg="6" className='m-auto text-center'>
                  <h3 className='fw-bold fs-4 mb-4'>Login</h3>

                  <Form className='auth-form' onSubmit={onSubmit}>
                    <FormGroup className='form-group mb-3 w-100'>
                      <input type="email" placeholder='Enter your email' value={email} id="email" onChange={onChange} />
                    </FormGroup>

                    <FormGroup className='form-group mb-3 w-100'>
                      <input type="password" placeholder='Enter your password' value={password} id="password" onChange={onChange} />
                    </FormGroup>

                    <motion.button whileTap={{ scale: 1.1 }} type="submit" className="submit-btn auth-btn"> Login </motion.button>
                    <p>Don't have an account? <Link to="/register">Register account</Link></p>

                    <Link to="/forgot-password" className='forgot'>Forgot password?</Link>
                    
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

export default Login