import React from 'react';
import { Button, fluid, Container, Row, Col } from 'react-bootstrap';
import { AiOutlineMail } from 'react-icons/ai'
import { BsFacebook, BsInstagram } from 'react-icons/bs';

import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Contact.css';

const Contact = () =>
{
    return (
        <div>
            <div className="contact">
                <h1 className="Head" >Contact</h1>
                <Container>
                    <Row className="rows" >
                        <Col style={{ margin: "3% 0 0 0" }} ><h1>Get in Touch</h1><p style={{ margin: "5% 0 0 0" }} >Feel free to drop a mail to know about any query or questions u have. I'll try my best to get back to you in short time </p></Col>
                        <Col >
                            <Col><h2 className="data" ><img src="/image/insta.png" style={{ padding: "0 10px 0 0", width: "10%" }} />Instagram</h2><a style={{ cursor: "pointer" }} href="https://www.instagram.com/viratpatel1998/" target="_blank" >viratpatel1998</a></Col>
                            <Col><h2 className="data" ><img src="/image/fb.png" style={{ padding: "0 10px 0 0" }} />Facebook</h2><a href="https://www.facebook.com/virat.patel.3910/" target="_blank" >Virat Patel</a></Col>
                            <Col><h2 className="data" ><img src="/image/email.png" style={{ padding: "0 10px 0 0", width: "11%" }} />Email</h2><a href="mailto:viratpatel993@gmail.com" >viratpatel993@gmail.com</a></Col>
                        </Col>
                    </Row>

                </Container>
            </div>
        </div>
    )
}

export default Contact
