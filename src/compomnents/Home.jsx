import React, { useEffect } from "react";
import Banner from './banner/Banner'
import '../assets/css/main.css'
import AOS from "aos";
import "aos/dist/aos.css";
import { Container, Row, Col, Image } from 'react-bootstrap'
import WorkProvide from './WorkProvide'
import { CgArrowLongRight } from "react-icons/cg";
import { FiArrowUpRight } from "react-icons/fi";
import ForEmployee from './workforce/ForEmployee'
import { Link } from 'react-router-dom'
import Testimonial from './testimonials/Testimonial'
import OnDemand from './ondemand/OnDemand'
import icon1 from "../assets/images/group1.png";
import icon2 from "../assets/images/g2.png";
import icon3 from "../assets/images/g3.png";
import icon4 from "../assets/images/g4.png";

function Home() {
  useEffect(() => {
    AOS.init({duration : 2000});
    AOS.refresh();
  }, []);
  return (
    <>
      <Banner />
      {/* Staffing Works section */}
      <section className='work-section section-padding' data-aos="fade-up">
        <Container>
          <div className='section-title title-center' data-aos="fade-up">
            <h1><span>How </span> on-demand staffing works</h1>
          </div>
          <Row>
            <Col sm={3} xs={6}>
              <OnDemand
                imgsrc={icon1}
                step="STEP 1"
                title="Quick Signup"
                details="Use our mobile app or web platform from the office or on the go, any time of day"
              />
            </Col>
            <Col sm={3} xs={6}>
              <OnDemand
                imgsrc={icon2}
                step="STEP 2"
                title="Post Jobs 24/7"
                details="Use our mobile app or web platform from the office or on the go, any time of day"
              />
            </Col>
            <Col sm={3} xs={6}>
              <OnDemand
                imgsrc={icon3}
                step="STEP 3"
                title="View Matches"
                details="With thousands of ready-to-go workers you can watch your jobs being filled in real time<"
              />
            </Col>
            <Col sm={3} xs={6}>
              <OnDemand
                imgsrc={icon4}
                step="STEP 4"
                title="We Do The Rest!"
                details="We take care of payroll, deductions and insurance"
              />
            </Col>
          </Row>
        </Container>
      </section>
      {/* Industries We Are Working */}
      <section className='section-padding' >
        <div className='mount-bg' data-aos="fade-up">
          <Container>
            <div className='section-title'>
              <h1 className='text-center'><span>Industries </span> we are working with</h1>
            </div>
            <WorkProvide />
          </Container>
        </div>
      </section>

      <section className='section-padding section-border'>
        <ForEmployee />
      </section>
      {/* Testimonials section */}
      <section className='section-padding testimonial-bg' data-aos="fade-up">
        <Container>
          <div className="f-subline">
            <Image src={require('../assets/images/hart.png')} className="img-fluid" alt="" />
            <p style={{ lineHeight: 0 }}>TESTIMONIALS</p>
          </div>
          <div className='section-title text-center'>
            <h1>See what our <span> customers </span>are saying</h1>
          </div>
        </Container>
        <Testimonial />
      </section>
      <section>
        <div className='section-padding work-force mt-5' data-aos="fade-up">
          <Container>
            <Row>
              <Col sm={6} data-aos="fade-up">
                <div className='section-title'>
                  <p>FOR EMPLOYERS</p>
                  <h1>Connecting You With <span> Flexible Work </span></h1>
                </div>
                <Image src={require('../assets/images/vector-line.png')} className="img-fluid" alt="" />
                <ul>
                  <li>Easy to use mobile & web platform</li>
                  <li><b>45,000+</b> workers</li>
                  <li>Realtime <b>tracking</b></li>
                  <li><b>95% </b> fulfillment rate</li>
                  <li>Preferred worker list</li>
                </ul>
                <Link to="">Learn More  &nbsp;&nbsp; <CgArrowLongRight /></Link>
              </Col>
              <Col sm={6} data-aos="fade-up">
                <Image src={require('../assets/images/jobs.png')} className="img-fluid" alt="" />
              </Col>
            </Row>
          </Container>
        </div>
      </section>
      <section className='city-section section-padding section-border'>
        <Container>
          <Row>
            <Col sm={6} className="mt-5" data-aos="fade-up">
              <p>Grizzly Force Cities</p>
              <h2>Serving <span>the Greater Vancouver, Victoria, Okanagan, Calgary</span>
                & <span> Toronto areas</span></h2>
            </Col>
            <Col sm={6} data-aos="fade-up">
              <Image src={require('../assets/images/map-image.png')} className="img-fluid" alt="" />
            </Col>
          </Row>
        </Container>
      </section>

      <section className="section-padding">
        <Container>
          <Row>
            <Col sm={6} data-aos="fade-up">
              <div className='flex-box first-box-color text-start'>
                <h3>Looking for additional help?</h3>
                <Link to="">Find Workers <FiArrowUpRight /></Link>
              </div>
            </Col>
            <Col sm={6} data-aos="fade-up">
              <div className='flex-box second-box-color text-ends'>
                <h3>Looking for additional help?</h3>
                <Link to="" className='text-white'>Find Jobs <FiArrowUpRight /></Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

    </>
  )
}

export default Home
