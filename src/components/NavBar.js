import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import TutorTapLogo from "../TutorTapLogo.png"
import faq from "../faq.png"
import Login from "../Login.png"

function NavBar() {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container>
          <Navbar.Brand href="/"><img src={TutorTapLogo}/></Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="/">Home</Nav.Link>
              <Nav.Link href="/FindTutors">Find Tutors</Nav.Link>
              <Nav.Link href="/BecomeTutor">Become a Tutor</Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="#faq">
                <img src={faq} alt="FAQ" width="40" height="40" />
              </Nav.Link>
            </Nav>
            <Nav className="ms-auto">
              <Nav.Link href="/Login">
                <img src={Login} alt="Login" width="104.17" height="40" />
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <hr/>
    </>
  );
}

export default NavBar;