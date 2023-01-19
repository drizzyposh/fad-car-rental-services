import React, { useEffect } from 'react'
import { Container, Row, Col, Form, FormGroup } from 'react-bootstrap'
import { useParams } from 'react-router-dom'
import blogData from '../assets/data/blogData'
import Helmet from '../components/Helmet/Helmet'
import commentImg from '../assets/all-images/ava-1.jpg'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'

import '../styles/Blogdetails.css'



const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((blog) => blog.title === slug)

  

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [])

  return (
    <>
      <Helmet title={blog.title}>

        <section>
        <Container>
          <Row>
            <Col lg="8" md="8">
                <div className="blog-details">
                  <img src={blog.imgUrl} alt="" className='w-100'/>
                  <h2 className="section-title mt-4">{blog.title}</h2>

                  <div className="blog-publisher d-flex align-items-center gap-4 mb-4">
                     <span className="blog-author">
                        <i className='ri-user-line'></i> {blog.author}
                      </span>

                      <span className="d-flex align-items-center gap-1 section-description">
                        <i className='ri-calender-line'></i> {blog.date}
                      </span>
                      <span className="d-flex align-items-center gap-1 section-description">
                        <i className='ri-time-line'></i> {blog.time}
                      </span>
                  </div>

                  <p className="section-description">{blog.description}</p>
                  <h6 className="pt-5 fw-normal">
                    <blockquote className='fs-4'>{blog.quote}</blockquote>
                  </h6>
                  <p className="section-description">{blog.description}</p>
                </div>

                <div className="comment-list mt-5">
                  <h4 className="mb-5">3 Comments</h4>

                  <div className="single-comment d-flex gap-3">
                    <img src={commentImg} alt="" />
                    <div className="comment-content">
                      <h6 className='fw-bold'>John Cornor</h6>
                      <p className="section-description mb-0">14 July, 2023</p>
                      <p className="section-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed quo aspernatur deleniti fugit aut, omnis ipsum quibusdam voluptates rerum harum minima porro numquam blanditiis itaque.</p>

                    <span className="replay d-flex align-items-center gap-1">
                      <i class="ri-reply-fill"></i> Replay 
                    </span>
                    </div>
                  </div>

                  {/* comment form */}
                  <div className="leave-comment-form mt-5">
                    <h4>Leave a Comment</h4>
                    <p className="section-description">
                      You must sign in to comment on a post
                    </p>

                    <Form>
                      <FormGroup className='d-flex gap-3 '>
                          <input type="text" placeholder='Full name' className='mb-3'/>
                          <input type="email" placeholder='Email' className='mb-3'/>
                      </FormGroup>

                      <FormGroup>
                        <textarea  rows="5" className='w-100 py-2 px-3' placeholder='Comment...'></textarea>
                      </FormGroup>

                      <motion.button whileTap={{ scale: 1.1 }} className=" comment-btn mt-3"><Link to="/login"> Post a Comment</Link></motion.button>
                    </Form>
                  </div>
                </div>
            </Col>

            <Col lg="4" md="4">
              <div className="recent-post mb-4">
                <h5 className="fw-bold">Recent Posts</h5>
              </div>
              {blogData.map((item) => (
                <div className="recentblogpost mb-4" key={item.id}>
                  <div className="recentblogitem d-flex gap-3">
                    <img src={item.imgUrl} alt="" className='w-25 rounded-2'/>
                    <h6><Link to={`/blogs/${item.title}`}>{blog.title}</Link></h6>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
        </section>
      </Helmet>
    </>
  )
}

export default BlogDetails