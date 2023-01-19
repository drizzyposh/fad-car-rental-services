import React from 'react'
import './Servicelist.css'
import { Col } from 'react-bootstrap'
import serviceData from '../../assets/data/serviceData'

const ServicesList = () => {
  return (
    <>
      {serviceData.map((item) => (
         <ServicesItem item={item} key={item.id}/>
      ))}
    </>

   
  )
}

const ServicesItem = ({ item }) => (
  <Col lg="4" md="4" sm="6">
    <div className="service-item">
      <span className="mb-3">
        <i className={item.icon}></i>
      </span>

      <h6>{item.title}</h6>
      <p className="section-description">{item.text}</p>
    </div>
  </Col>
)

export default ServicesList