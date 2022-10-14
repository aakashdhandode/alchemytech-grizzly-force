import React, { useState, useEffect } from "react";
import { Container, Nav, Navbar } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo.png'
import './navbar.css';

const Header = () => {
    const [active, setActive] = useState("home");
    return (
        <div>
            <Navbar collapseOnSelect expand="lg" className="navbar navbar-expand-lg navbar-light">
                <Container>
                    <Navbar.Brand href="#home">

                        <Nav.Link eventKey="home" as={Link} to="/">
                            <img src={logo} className="img-fluid" alt="logo" />
                        </Nav.Link>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav
                            className="me-auto sub-nav mr-auto border-left-0"
                            activeKey={active}
                            onSelect={(selectedKey) => setActive(selectedKey)}
                        >
                            {/* <Nav.Item>
                                <Nav.Link eventKey="home" as={Link} to="/">
                                    Find Workers
                                </Nav.Link>
                            </Nav.Item> */}
                            <Nav.Item>
                                <Nav.Link eventKey="findworker" as={Link} to="/findworker">
                                    Find Workers
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="findJobs" as={Link} to="/findJobs">
                                    Find Jobs
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="about" as={Link} to="/about">
                                    About Us
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="resources" as={Link} to="/resources">
                                    Resources
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link eventKey="login" as={Link} to="/login">
                                    Login
                                </Nav.Link>
                            </Nav.Item>
                        </Nav>
                        <Nav>
                            <Nav.Link eventKey={2} to="/" className="login-btn">
                                Open Account
                            </Nav.Link>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
}

export default Header