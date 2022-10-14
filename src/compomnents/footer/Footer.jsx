
import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import './footer.css'
import { Link } from "react-router-dom";
// import { IoLocationSharp } from "react-icons/io";
// import { HiLocationMarker } from "react-icons/hi";
import { HiLocationMarker } from "react-icons/hi";
import { GrMail } from "react-icons/gr";
import { BsFillTelephoneFill } from "react-icons/bs";
import NewsLetter from './NewsLetter';




export const Footer = () => {
   return (
      <div className='mobile-footer'>
         <NewsLetter />
         <footer>
            <div className="footer-top">
               <Container>
                  <Row>
                     <Col sm={5}>
                        <div className="widget">
                           <div className="footer-logo"><a href="/"><Image src={require('../../assets/images/logo.png')} /></a></div>
                           <p>Grizzly is a private virtual network that has <br /> unique features and has high security.</p>
                           <Image src={require('../../assets/images/gplay.png')} className="img-fluid" alt="" />
                           <Image src={require('../../assets/images/appstor.png')} className="img-fluid" alt="" />

                        </div>

                     </Col>
                     <Col sm={2} xs={6}>
                        <div className="widget">
                           <h6 className="widget-title">Product</h6>
                           <ul className="widget-links">
                              <li><Link to="/">Download </Link></li>
                              <li><Link to="/">Pricing</Link></li>
                              <li><Link to="/">Locations</Link></li>
                              <li><Link to="/">Server</Link></li>
                              <li><Link to="/">Countries</Link></li>
                              <li><Link to="/">Blog </Link></li>
                           </ul>
                        </div>
                     </Col>
                     <Col sm={2} xs={6}>
                        <div className="widget">
                           <h6 className="widget-title">Engage</h6>
                           <ul className="widget-links">
                              <li><Link to="/products">FAQ</Link></li>
                              <li><Link to="/products">Tutorials</Link></li>
                              <li><Link to="/products">About Us</Link></li>
                              <li><Link to="/products">Privacy Policy</Link></li>
                              <li><Link to="/products">Terms of Service</Link></li>
                           </ul>
                        </div>
                     </Col>
                     <Col sm={2}>
                        <div className="widget">
                           <h6 className="widget-title">Earn Money</h6>
                           <ul className="widget-links">
                              <li><Link to="/">Affiliate</Link></li>
                              <li><Link to="/">Become Partner</Link></li>

                           </ul>
                        </div>
                     </Col>

                  </Row>
               </Container>
            </div>
         </footer>
         <div className="bottom-footer border-top--grey">
            <Container>
               <Row>
                  <Col lg={6} xs={8}>
                     <p className="mb-3 mb-md-0 text-md-left">

                        © 2022 Grizzly, Inc. All rights reserved                        </p>
                  </Col>
                  <Col lg={6} xs={4} className="text-end">
                     <div className="widget">
                        <ul className="social-icons">
                           <li>
                              <a href="/"><i className="fab fa-instagram"></i> </a>
                           </li>
                           <li>
                              <a href="/"><i className="fab fa-facebook-f"></i></a>
                           </li>
                           <li>
                              <a href="/"><i className="fab fa-linkedin"></i>
                              </a>
                           </li>
                           <li>
                              <a href="/"><i className="fab fa-twitter"></i>
                              </a>
                           </li>
                        </ul>
                     </div>
                  </Col>
               </Row>
            </Container>
         </div>
      </div>
   )
}