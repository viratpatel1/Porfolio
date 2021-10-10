import React from 'react';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { AiFillGithub } from 'react-icons/ai';
import { Button, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../CSS/Project.css';

const Project = () =>
{
    return (
        <div className="main">
            <div id="con" className="container">
                <h1 className="pro" style={{ color: "#00ffff" }} >Project</h1>
                < div id="Project" className="contain" >
                    < Card className="container-left" style={{ width: '18rem', backgroundColor: "rgb(18, 19, 19)", color: "white" }}>
                        <Card.Img className="img" variant="top" src="image/CRUD.jpg" alt="Img" />
                        <Card.Body  >
                            <Card.Title>CRUD App</Card.Title>
                            <Card.Text >
                                Web App where You can easily Create and Delete your Infomation.
                            </Card.Text>
                        </Card.Body>

                        <Card.Body style={{ margin: "-20px 0 0 0" }}>
                            <Card.Link target="_blank" href="https://users-cruds.netlify.app/"><FaExternalLinkAlt style={{ fontSize: "25px" }} /></Card.Link>
                            <Card.Link target="_blank" href="https://github.com/viratpatel1/CRUD"><AiFillGithub style={{ fontSize: "30px" }} /></Card.Link>
                        </Card.Body>
                    </Card>

                    <Card className="container-left" style={{ width: '18rem', backgroundColor: "rgb(18, 19, 19)", color: "white" }}>
                        <Card.Img className="img" variant="top" src="image/frontPage.jpg" alt="Img" />
                        <Card.Body>
                            <Card.Title>Pricing tag UI</Card.Title>
                            <Card.Text>
                                Created a Demo of Pricing tag UI similar to  Bootstrap by using React JS
                            </Card.Text>
                        </Card.Body>

                        <Card.Body style={{ margin: "-20px 0 0 0" }}>
                            <Card.Link target="_blank" href="https://pricing-table-bootstrap.netlify.app/   "><FaExternalLinkAlt style={{ fontSize: "25px" }} /></Card.Link>
                            <Card.Link target="_blank" href="https://github.com/viratpatel1/Price_table_bootstrap"><AiFillGithub style={{ fontSize: "30px" }} /></Card.Link>
                        </Card.Body>
                    </Card>

                    <Card className="container-left" style={{ width: '18rem', backgroundColor: "rgb(18, 19, 19)", color: "white" }}>
                        <Card.Img className="img" variant="top" src="image/Gmail.jpg" alt="Img" />
                        <Card.Body>
                            <Card.Title>Gmail API</Card.Title>
                            <Card.Text>
                                It's A Demo of A Gmail Where you can Login with your valid email id to check yr email
                            </Card.Text>
                        </Card.Body>

                        <Card.Body style={{ margin: "-20px 0 0 0" }}>
                            <Card.Link target="_blank" href="https://blissful-raman-c8ad93.netlify.app/"><FaExternalLinkAlt style={{ fontSize: "25px" }} /></Card.Link>
                            <Card.Link target="_blank" href="https://github.com/viratpatel1/1-Hackathon-Gmail-Clone-API"><AiFillGithub style={{ fontSize: "30px" }} /></Card.Link>
                        </Card.Body>
                    </Card>
                    <Card className="container-left" style={{ height: "90%", width: '18rem', backgroundColor: "rgb(18, 19, 19)", color: "white" }}>
                        <Card.Img style={{ height: "43%" }} className="img" variant="top" src="image/Calculater.jpg" alt="Img" />
                        <Card.Body>
                            <Card.Title>Calculator</Card.Title>
                            <Card.Text>
                                A Basic Calculator made by using HTMl, CSS and Javascript
                                <br />
                                <br />
                            </Card.Text>
                        </Card.Body>

                        <Card.Body style={{ margin: "-20px 0 0 0" }}>
                            <Card.Link target="_blank" href="https://flamboyant-kare-ee8410.netlify.app/"><FaExternalLinkAlt style={{ fontSize: "25px" }} /></Card.Link>
                            <Card.Link target="_blank" href="https://github.com/viratpatel1/Calculator-js"><AiFillGithub style={{ fontSize: "30px" }} /></Card.Link>
                        </Card.Body>
                    </Card>
                    <Card className="container-left" style={{ height: "90%", width: '18rem', backgroundColor: "rgb(18, 19, 19)", color: "white" }}>
                        <Card.Img style={{ height: "43%" }} className="img" variant="top" src="image/Form-Table.jpg" alt="Img" />
                        <Card.Body>
                            <Card.Title>Form Table</Card.Title>
                            <Card.Text>
                                It's A Form table where you can fill the form the see the data at the bottom of the page
                            </Card.Text>
                        </Card.Body>

                        <Card.Body style={{ margin: "-20px 0 0 0" }}>
                            <Card.Link target="_blank" href="https://quirky-brattain-729eaf.netlify.app/"><FaExternalLinkAlt style={{ fontSize: "25px" }} /></Card.Link>
                            <Card.Link target="_blank" href="https://github.com/viratpatel1/Form-Table"><AiFillGithub style={{ fontSize: "30px" }} /></Card.Link>
                        </Card.Body>
                    </Card>

                    <Card className="container-left" style={{ height: "90%", width: '18rem', backgroundColor: "rgb(18, 19, 19)", color: "white" }}>
                        <Card.Img style={{ height: "43%" }} className="img" variant="top" src="image/Social-Media.jpg" alt="Img" />
                        <Card.Body>
                            <Card.Title>MERN Project</Card.Title>
                            <Card.Text>
                                In this user can create there account the post there device photos on the site
                            </Card.Text>
                        </Card.Body>

                        <Card.Body style={{ margin: "-20px 0 0 0" }}>
                            <Card.Link target="_blank" href="https://captone-project.herokuapp.com/"><FaExternalLinkAlt style={{ fontSize: "25px" }} /></Card.Link>
                            <Card.Link target="_blank" href="https://github.com/viratpatel1/capstone"><AiFillGithub style={{ fontSize: "30px" }} /></Card.Link>
                        </Card.Body>
                    </Card>

                </div>
            </div >
        </div >
    )
};


export default Project
