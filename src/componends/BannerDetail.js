import React from 'react';
import Typewriter from 'typewriter-effect';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-scroll';
import '../CSS/BannerDetail.css';

const BannerDetail = () =>
{
    return (
        <div>
            <div id="Banner-Section" className="Banner-Section">
                <Container>
                    <Row>
                        <Col>
                            <div className="My-Intro" >
                                <div className="Intro-Header">
                                    <p>Hello! My name is</p>
                                    <h1><span>V</span>irat <span>P</span>atel</h1>
                                    <br />
                                </div>
                                <h3>Full Stack Developer</h3>
                                <p> I am an</p>
                                <span> <p><Typewriter
                                    options={{
                                        strings: ['<span style="color: white;" >Web Developer</span>',
                                            '<span style="color: white;" >Engineer</span>',
                                            '<span style="color: white;" >Programmer</span>'],
                                        autoStart: true,
                                        loop: true,
                                    }}
                                />
                                </p>
                                </span>
                                <Button variant="info" ><Link activeClass="active" spy={true} to="contact" smooth={true}>Contact</Link></Button>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
        </div >
    )
}


export default BannerDetail
