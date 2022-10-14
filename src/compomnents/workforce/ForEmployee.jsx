import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './workforce.css'
import { CgArrowLongRight } from "react-icons/cg";

const ForEmployee = () => {
    return (
        <div className=' work-force mt-5'>
            <Container>
                <Row>
                    <Col sm={6} className="order-sm-first order-last" data-aos="fade-up">
                        <Image src={require('../../assets/images/employe.png')} className="img-fluid mobile-pt-2" alt="" />
                    </Col>
                    <Col sm={6}>
                        <div className='section-title' data-aos="fade-up">
                            <p>FOR EMPLOYERS</p>
                            <h1><span>Workforce </span> At Your Fingertips </h1>
                        </div>
                        <Image src={require('../../assets/images/vector-line.png')} className="img-fluid" alt="" data-aos="fade-up"/>
                        <ul data-aos="fade-up">
                            <li>Easy to use mobile & web platform</li>
                            <li><b>45,000+</b> workers</li>
                            <li>Realtime <b>tracking</b></li>
                            <li><b>95% </b> fulfillment rate</li>
                            <li>Preferred worker list</li>
                        </ul>
                        <Link to="">Learn More  &nbsp;&nbsp; <CgArrowLongRight /></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default ForEmployee
