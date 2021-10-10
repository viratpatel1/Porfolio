import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import Bounce from 'react-reveal/Bounce';
import '../CSS/Home.css'

const Home = () =>
{
    return (
        <div id="a">
            <div className="about">
                <h1 style={{ color: "#00ffff", margin: "5% 0 0 0", padding: "0 0 20px 0" }}>About Me</h1>
                <div className="about-info">
                    <Container className='about-container'>
                        <Row className="row">
                            <Col className="about-row" sm={7} >
                                <Bounce right>
                                    <p>Hello!I'm Virat Patel, a passionate Web Developer. I have graduated with Bachelors Degrees in ETRX Engineering(2016-2020) from <a href="https://slrtce.in/" target="_blank" ><span className="clg" >SLRTCE</span></a> in Mumbai University. </p>
                                    <p> I like to work on JavaScript, React and Python.My Core skill is MERN Stack Developer and I love to do most of the things using JS.Along with this I have also work on IoT Project.</p>
                                    I am avaiable to work in a professional environment with like-minded people and work hard with my
                                    skills towards the vision, mission and goal of the company <br />
                                </Bounce>
                                <Button variant="info" href="https://drive.google.com/file/d/1cY9ICkgPgOLnQ6NgYxx4N_3AcnFwYq4E/view?usp=sharing" target="_blank">My Resume</Button>
                                <Button variant="info" href="mailto:viratpatel993@gmail.com">Get in Touch</Button>
                            </Col>
                            <Col sm={5}><img src="image/profile-pic.jpg" /></Col>
                        </Row>
                    </Container>
                </div>

            </div>
        </div>
    )
}


export default Home
