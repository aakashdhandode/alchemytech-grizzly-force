import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'

function NewsLetter() {
  return (
    <div className='section-padding news-letter'>
      <Container>
      <div className='section-title' data-aos="fade-up">
            <h1 className='text-center'>Subscribe to our <span>Newsletter</span></h1>
            <h6 className='f-subline'>Keep up with the Grizzly Force team!</h6>
          </div>
          <Row>
          <Col md={{ span: 6, offset: 4 }}>
          <input type="text" className="input-field" />
          <button className='btn btn-info'>Submit</button>
            </Col>
          </Row>
      </Container>
    </div>
  )
}


export default NewsLetter
