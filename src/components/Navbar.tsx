import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from "../assets/logo.jpeg";
import "./Navbar.css";
const scrollToSection = (id: string) => {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
};

function BasicExample() {
  return (
    <Navbar expand="lg" bg="black" variant="dark" fixed="top">
      <Container>
        {/* Logo - On Click scroll to Home section */}
        <Navbar.Brand href="#home" onClick={() => scrollToSection("home-section")}>
          <img 
            src={logo} 
            alt="Logo"
            width="80"
            height="75"
            className="d-inline-block align-top"
          />
        </Navbar.Brand>
        
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => scrollToSection("home-section")}>Home</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("skills-section")}>Skills</Nav.Link>
            <Nav.Link onClick={() => scrollToSection("projects")}>Projects</Nav.Link>
            {/* Contact Us link */}
          
          </Nav>
          <Nav>
            {/* LinkedIn Icon */}
            <Nav.Link href="https://www.linkedin.com/in/pathangesaipranav" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} size="2xl" />
            </Nav.Link>

            {/* GitHub Icon */}
            <Nav.Link href="https://github.com/psp2535" target="_blank">
              <FontAwesomeIcon icon={faGithub} size="2xl" />
            </Nav.Link>

            {/* Email Icon */}
            <Nav.Link href="https://mail.google.com/mail/?view=cm&fs=1&to=saipranav974@gmail.com" target="_blank">
              <FontAwesomeIcon icon={faEnvelope} size="2xl" />
            </Nav.Link>

            {/* Let's Connect Button Next to Email */}
            <div >
            <button className="connect-btn" onClick={() => scrollToSection("contact")}>
              Let's Connect
            </button></div>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default BasicExample;
