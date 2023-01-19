import React from 'react'
import './OurMembers.css'
import { Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'

import picture1 from '../../assets/all-images/ava-4.jpg'
import picture2 from '../../assets/all-images/ava-1.jpg'
import picture3 from '../../assets/all-images/ava-2.jpg'
import picture4 from '../../assets/all-images/ava-3.jpg'

const OUR_MEMBERS = [
    {
        name: 'Britney Spears',
        experience: '5 years of experience',
        fbUrl: '#',
        instUrl: '#',
        twitUrl: '#',
        linkedinUrl: '#',
        imgUrl: picture1
    },
    {
        name: 'Ken Braisley',
        experience: '2 years of experience',
        fbUrl: '#',
        instUrl: '#',
        twitUrl: '#',
        linkedinUrl: '#',
        imgUrl: picture2
    },
    {
        name: 'Morris Sam',
        experience: '10 years of experience',
        fbUrl: '#',
        instUrl: '#',
        twitUrl: '#',
        linkedinUrl: '#',
        imgUrl: picture4
    },
    {
        name: 'Darwin Ruth',
        experience: '6 years of experience',
        fbUrl: '#',
        instUrl: '#',
        twitUrl: '#',
        linkedinUrl: '#',
        imgUrl: picture3
    },
    {
        name: 'Brody Mac',
        experience: '5 years of experience',
        fbUrl: '#',
        instUrl: '#',
        twitUrl: '#',
        linkedinUrl: '#',
        imgUrl: picture4
    },
    {
        name: 'Gab Stella',
        experience: '12 years of experience',
        fbUrl: '#',
        instUrl: '#',
        twitUrl: '#',
        linkedinUrl: '#',
        imgUrl: picture3
    },
    {
        name: 'Modric Israel',
        experience: '10 years of experience',
        fbUrl: '#',
        instUrl: '#',
        twitUrl: '#',
        linkedinUrl: '#',
        imgUrl: picture2
    },
    {
        name: 'Shauntel Brain',
        experience: '10 years of experience',
        fbUrl: '#',
        instUrl: '#',
        twitUrl: '#',
        linkedinUrl: '#',
        imgUrl: picture1
    }
]

const OurMembers = () => {
  return (
    <>
        {OUR_MEMBERS.map((item, index) => (
            <Col lg="3" md="3" sm="4" xs="6" key={index} className="mb-4">
                <div className="single-member">
                    <div className="single-member-img">
                        <img src={item.imgUrl} alt="" className='w-100'/>

                        <div className="single-member-social">
                            <Link to={item.fbUrl}>
                                <i class="ri-facebook-line"></i>
                            </Link>

                            <Link to={item.fbUrl}>
                                <i class="ri-twitter-fill"></i>
                            </Link>

                            <Link to={item.fbUrl}>
                                <i class="ri-linkedin-fill"></i>
                            </Link>

                            <Link to={item.fbUrl}>
                                <i class="ri-instagram-line"></i>
                            </Link>
                        </div>
                    </div>

                    <h6 className="text-center mb-0 mt-3">{item.name}</h6>
                    <p className="section-description text-center">{item.experience}</p>
                </div>
            </Col>
        ))}
    </>
  )
}

export default OurMembers