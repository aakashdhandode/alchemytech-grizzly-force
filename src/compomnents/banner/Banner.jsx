import React from 'react'
import { Button, Col, Container, Row, Image } from 'react-bootstrap';
import './banner.css'

function Banner() {
    return (
        <div>
            <Container>
                <Row className="banner-section">
                    <Col sm={6}>
                        <div className="banner-text align-middle" data-aos="fade-up">
                            <span>Modern Temp</span>
                            <span> Labour </span>
                            <span>Solutions</span>
                            <div className="banner-button mt-3">
                                <button type="button" class="btn btn-dark">Find Workers</button>
                                <button type="button" class="btn btn-info" style={{ backgroundColor: '#11b2a8' }}>Find Job</button>
                            </div>
                        </div>
                    </Col>
                    <Col sm={6}>
                        <div className='banner-img' data-aos="fade-up">
                            <Image src={require('../../assets/images/pimgs.png')} className="img-fluid img-responsive careerpage" alt="" />
                            <Image src={require('../../assets/images/mobileb.png')} className="img-fluid img-responsive careerpage mobile" alt="" />
                        </div>
                    </Col>
                </Row>
                <Image src={require('../../assets/images/mountain_1.png')} className="img-fluid mount" alt="" />
                {/* <Image src={require('../../assets/images/mountain_1.png')} className="img-fluid mount" alt="" /> */}
                <div className='spas'></div>

            </Container>
        </div>
    )
}

export default Banner
