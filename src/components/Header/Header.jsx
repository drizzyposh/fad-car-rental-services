import React, { useRef } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import { Link, NavLink} from 'react-router-dom'
import './Header.css'
import { motion } from 'framer-motion'

const Header = () => {
  const navLinks = [
    {
      path:'/home',
      display: 'Home'
    },
    {
      path:'/about',
      display: 'About'
    },
    {
      path:'/cars',
      display: 'Cars'
    },
    {
      path:'/blogs',
      display: 'Blog'
    },
    {
      path:'/contact',
      display: 'Contact'
    }
  ]

  const menuRef = useRef(null)

  const toggleMenu = () => {
    menuRef.current.classList.toggle('menu-active')
  }


  return (
    <>
      <header className='header'>
        {/* Header top */}
        <div className="header-top">
          <Container>
            <Row>
              <Col lg='6' md='6' sm='6'>
                <div className="header-top-left">
                  <span>Need Help?</span>
                  <span className="header-help">
                    <i class="ri-phone-fill"></i>+2348119292443
                  </span>
                </div>
              </Col>

              <Col lg='6' md='6' sm='6'>
                <div className="header-top-right d-flex align-items-center justify-content-end gap-3">
                  {/* <Link to="/login" className='d-flex align-items-center gap-1'>
                    <motion.i whileTap={{ scale: 1.2}} class="ri-login-box-line"></motion.i> Login
                  </Link> */}

                   <Link to="/register" className='d-flex align-items-center gap-1 d-none'>
                    <motion.i whileTap={{ scale: 1.2 }} class="ri-user-line"></motion.i> Register
                  </Link> 

                  <Link to="/profile" className='d-flex align-items-center gap-1 profilebar'>
                    <motion.i whileTap={{ scale: 1.2 }} class="ri-user-line"></motion.i> Profile
                  </Link>
                </div>
              </Col>
            </Row>
          </Container>
        </div>

        {/* Header middle */}
        <div className="header-middle">
          <Container>
            <Row>
              <Col lg='4' md='3' sm='4'>
                <div className="logo">
                  <h1><Link to='/home' className='d-flex align-items-center gap-3'>
                    <i class="ri-car-line"></i>
                    <span>Fad Car <br /> Service </span>
                  </Link></h1>
                </div>
              </Col>

              <Col lg='3' md='3' sm='4'>
                <div className="header-location d-flex align-items-center gap-2">
                  <span><i class="ri-earth-line"></i></span>
                  <div className="header-location-content">
                    <h4>Nigeria</h4>
                    <h6>Lagos State, Nigeria</h6>
                  </div>
                </div>
              </Col>

              <Col lg='3' md='3' sm='4'>
                <div className="header-location d-flex align-items-center gap-2">
                  <span><i class="ri-time-line"></i></span>
                  <div className="header-location-content">
                    <h4>Sunday to Friday</h4>
                    <h6>10am - 8pm</h6>
                  </div>
                </div>
              </Col>

              <Col lg='2' md='3' sm='0' className='d-flex align-items-center justify-content-end'>
                <motion.button whileTap={{ scale: 1.1}} className="header-btn btn">
                  <Link to='/contact'>
                    <i class="ri-phone-line"></i> Request a call
                  </Link>
                </motion.button>
              </Col>
            </Row>
          </Container>
        </div>


        {/* navbar */}

        <div className="main-navbar">
          <Container>
            <div className="navigation-wrapper d-flex align-items-center justify-content-between">
              <span className="mobile-menu">
                <i class="ri-menu-2-line" onClick={toggleMenu}></i>
              </span>

              <div className="navigation" ref={menuRef} onClick={toggleMenu}>
                <div className="menu">
                  {navLinks.map((item, index) => {
                    return (
                      <NavLink to={item.path} key={index} className={navClass => navClass.isActive ? 'nav-active nav-item' : 'nav-item'}>{item.display}</NavLink>
                    )
                  })}
                </div>
              </div>

              <div className="nav-right">
                <div className="search-bar">
                  <input type="text" placeholder='Search for cars' />
                  <span><i class="ri-search-2-line search-icon"></i></span>
                </div>
              </div>
            </div>
          </Container>
        </div>
      </header>
    </>
  )
}

export default Header
