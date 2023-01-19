import React from 'react'
import './Bloglist.css'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import blogData from '../../assets/data/blogData'

const BlogList = () => {
  return (
    <>
        {blogData.map((item) => (
            <BlogItem item={item} key={item.id}/>
        ))}
    </> 
  )
}

const BlogItem = ({item}) => {
    
    const {imgUrl, title, author, date, description, time} = item

    return (
        <Col lg="4" md="4" sm="6" className='mb-5'>
            <div className="blog-item">
                <img src={imgUrl} alt="" className='w-100'/>
                <div className="blog-info p-3">
                    <Link to={`/blogs/${title}`} className="blog-title">{title}</Link>
                    <p className="section-description mt-3">
                        {description.length > 100 ? description.substr(0,100) : description}
                    </p>

                    <Link to={`/blogs/${title}`} className="read-more">Read More</Link>

                    <div className="blog-time pt-3 mt-3 d-flex align-items-center justify-content-between">
                        <span className="blog-author">
                            <i className='ri-user-line'></i> {author}
                        </span>

                        <div className="d-flex align-items-center gap-3">
                            <span className="d-flex align-items-center gap-1 section-description">
                                <i className='ri-calender-line'></i> {date}
                            </span>
                            <span className="d-flex align-items-center gap-1 section-description">
                                <i className='ri-time-line'></i> {time}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </Col>
    )
}

export default BlogList