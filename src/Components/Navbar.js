import { Navbar, Container, Nav } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { faLinkedin, faGithub, faTwitter, faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import logo from '../assets/logo.jpg';
import '../App.scss';



function Layout() {
  return (
    <>
    <Navbar collapseOnSelect expand="lg" style={{backgroundColor: "#071740", position: "sticky"}} variant="dark" fixed="top">
   
  <Container>
  <Navbar.Brand href="/"> <img className='image' src= {logo} alt="logo" /></Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto " >
      <Nav.Link href="#">Home</Nav.Link>
      <Nav.Link href="#about" >About</Nav.Link>
      <Nav.Link href="#skills" >Skills</Nav.Link>
      <Nav.Link href="#projects" >Projects</Nav.Link>
      <Nav.Link href="#contact" >Contact</Nav.Link>
    </Nav>
    <Nav className="facebook-link">
      <Nav.Link 
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedIn.com/in/el90dorado100"
          className='facebook-link'>
          <FontAwesomeIcon icon={faLinkedin} />
        </Nav.Link>
      <Nav.Link 
          target="_blank"
          rel="noreferrer"
          href="https://www.github.com/el90dorado100"
          className='facebook-link'>
          <FontAwesomeIcon icon={faGithub} />
        </Nav.Link>
      <Nav.Link 
          target="_blank"
          rel="noreferrer"
          href="https://www.twitter.com/el90dorado100"
          className='facebook-link'>
          <FontAwesomeIcon icon={faTwitter} />
        </Nav.Link>
      <Nav.Link 
          target="_blank"
          rel="noreferrer"
          href="https://wa.link/snczg2"
          className='facebook-link'>
          <FontAwesomeIcon icon={faWhatsapp} />
        </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
  </Navbar>
    </>  
    );
}

export default Layout;