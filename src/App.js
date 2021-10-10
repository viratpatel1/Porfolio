import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Link } from 'react-scroll';
import { Container, Nav } from 'react-bootstrap';

import * as ReactBootStrap from 'react-bootstrap';
import BannerDetail from './componends/BannerDetail';
import Home from './componends/Home';
import PrograssBar from './componends/PrograssBar';
import Project from './componends/Project';
import Contact from './componends/Contact';
// import HamburgerMenuPage from './componends/Hamburger';
import 'bootstrap/dist/css/bootstrap.min.css';

import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';

function App()
{
  return (
    <div className="App">
      {/* <HamburgerMenuPage /> */}
      <Navbar />
      <BannerDetail />
      <Home />
      <PrograssBar />
      <Project />
      <Contact />
    </div>
  );
}

{/* 
<Router>
  <Navbar />
  <Switch>
    <Route path=""><BannerDetail /></Route>
    <Route path="a"><Home /></Route>
    <Route path="skill"><PrograssBar /></Route>
  </Switch>
</Router> */}
{/* <Navbar /> */ }


// function Navbar()
// {
//   return (
//     <div className="container">
//       <div id="nav" className="Navbar">
//         <div className="left-nav">
//           <ul>
//             <li>
//               <Link activeClass="active" spy={true} to="Banner-Section" smooth={true}>Home</Link>
//             </li>
//             <li>
//               <Link activeClass="active" spy={true} to="a" smooth={true}>About</Link>
//             </li>
//             <li>
//               <Link activeClass="active" spy={true} to="skill" smooth={true}>Skill</Link>
//             </li>
//           </ul>
//         </div>
//         <div className="middle-nav">
//           <img src="image/finals.gif" ></img>
//         </div>
//         <div className="right-nav">
//           <ul>
//             <li>
//               <Link activeClass="active" spy={true} to="Project" smooth={true}>Project</Link>
//             </li>
//             <li>
//               <Link activeClass="active" spy={true} to="contact" smooth={true}>Contact</Link>
//             </li>
//             <li>
//               <Link activeClass="active" spy={true} href="" target="_blank" smooth={true}>Resume</Link>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   )
// }

function Navbar()
{
  return (
    // style={{ position: "fixed", backgroundColor: "gray", width: "100vw" }} className="container" 
    <div>
      <div className="Navbar" >

        <ReactBootStrap.Navbar className="react-nav" collapseOnSelect expand="lg" variant="dark">
          <Container>
            <ReactBootStrap.Navbar.Brand style={{ color: "#00ffff", fontFamily: "cursive", fontSize: "30px", fontWeight: "600" }} href="/">VP{/* <img src="image/finals.gif" ></img> */}</ReactBootStrap.Navbar.Brand>
            <ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                {/* <Nav.Link ><Link activeClass="active" spy={true} to="Banner-Section" smooth={true}>Home</Link></Nav.Link>
                <Nav.Link ><Link activeClass="active" spy={true} to="a" smooth={true}>About</Link></Nav.Link>
                <Nav.Link><Link activeClass="active" spy={true} to="skill" smooth={true}>Skill</Link></Nav.Link>
                <Nav.Link><Link activeClass="active" spy={true} to="Project" smooth={true}>Project</Link></Nav.Link>
                <Nav.Link> <Link activeClass="active" spy={true} to="contact" smooth={true}>Contact</Link></Nav.Link>
                <Nav.Link href="https://drive.google.com/file/d/1zFTRCnLwa8Cbhxcx1XtT4iK0U6Pgq3PR/view" target="_blank" ><a>Resume</a></Nav.Link> */}
              </Nav>

              <Nav>
                <Nav.Link ><Link style={{ color: "#00ffff" }} activeClass="active" spy={true} to="Banner-Section" smooth={true}>Home</Link></Nav.Link>
                <Nav.Link ><Link style={{ color: "#00ffff" }} activeClass="active" spy={true} to="a" smooth={true}>About</Link></Nav.Link>
                <Nav.Link><Link style={{ color: "#00ffff" }} activeClass="active" spy={true} to="skill" smooth={true}>Skill</Link></Nav.Link>
                <Nav.Link><Link style={{ color: "#00ffff" }} activeClass="active" spy={true} to="con" smooth={true}>Project</Link></Nav.Link>
                <Nav.Link> <Link style={{ color: "#00ffff" }} activeClass="active" spy={true} to="contact" smooth={true}>Contact</Link></Nav.Link>
                <Nav.Link href="https://drive.google.com/file/d/1cY9ICkgPgOLnQ6NgYxx4N_3AcnFwYq4E/view?usp=sharing" target="_blank" ><a style={{ color: "#00ffff" }}>Resume</a></Nav.Link>
              </Nav>
            </ReactBootStrap.Navbar.Collapse>
          </Container>
        </ReactBootStrap.Navbar>
      </div>
    </div>
  )
}

export default App;
