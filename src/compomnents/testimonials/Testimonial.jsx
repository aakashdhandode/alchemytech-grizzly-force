import React from 'react'
import { Container, Row, Col, Image } from 'react-bootstrap'
import Slider from 'react-slick';
import './testimonials.css'

function Testimonial() {
    var testimonial = {
        slidesToShow: 1,
        slidesToScroll: 1,
        adaptiveHeight: true,
        arrows: false,
        infinite: true,
        centerMode: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,

                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    initialSlide: 1,
                    infinite: false,
                    centerMode: false
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    };

    return (
        <>
            <Container className="testimonail">
                <Slider {...testimonial}>
                    <div className="card">
                        <Row>
                            <Col lg={10} className="order-sm-first order-last">
                                <h6>Excellent App! Best in Langley for temp labour! They provide 24/7 support, call them and get your labour right away. Also, they pay their
                                    labour same day! With Grizzly Force you will have efficient labour and better control!</h6>
                                <h4>Tony Hartzenberg</h4>
                                <p>CEO, Sugarplum</p>
                            </Col>
                            <Col lg={2}>
                                <div className='testimonial-img'>
                                    <Image src={require('../../assets/images/test1.png')} className="img-fluid" alt="" />
                                </div>
                            </Col>
                        </Row>
                    </div>

                    <div className="card">
                        <Row>
                            <Col lg={10} className="order-sm-first order-last">
                                <h6>Excellent App! Best in Langley for temp labour! They provide 24/7 support, call them and get your labour right away. Also, they pay their
                                    labour same day! With Grizzly Force you will have efficient labour and better control!</h6>
                                <h4>Tony Hartzenberg</h4>
                                <p>CEO, Sugarplum</p>
                            </Col>
                            <Col lg={2}>
                                <div className='testimonial-img'>
                                    <Image src={require('../../assets/images/test1.png')} className="img-fluid" alt="" />
                                </div>
                            </Col>
                        </Row>
                    </div>
                </Slider>
            </Container>


            <section className='client-logo'>
                <article>
                    <p>Featured Customers</p>
                </article>
                <Container>
                    <Row xs={3} md={5} lg={5}>
                        <Col>
                            <Image src={require('../../assets/images/clients/c1.png')} className="img-fluid" alt="" />
                        </Col>
                        <Col>
                            <Image src={require('../../assets/images/clients/c1.png')} className="img-fluid" alt="" />
                        </Col>
                        <Col>
                            <Image src={require('../../assets/images/clients/c1.png')} className="img-fluid" alt="" />
                        </Col>
                        <Col>
                            <Image src={require('../../assets/images/clients/c1.png')} className="img-fluid" alt="" />
                        </Col>
                        <Col>
                            <Image src={require('../../assets/images/clients/c1.png')} className="img-fluid" alt="" />
                        </Col>
                    </Row>
                </Container>
            </section>



        </>
    )
}

export default Testimonial
