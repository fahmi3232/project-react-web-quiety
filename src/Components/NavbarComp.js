import React, { useState } from "react";
import { Container, Row, Navbar, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from '../img/logo-white.png'

const NavbarComp = () => {
  const [nav, setNav] = useState(false)

  const changeBackground = () => {
    if(window.scrollY >= 50){
      setNav(true)
    } else{
      setNav(false)
    }
  }

  window.addEventListener('scroll', changeBackground)

  return (
    <div>
      <Container fluid>
        <Row>
          <Navbar className={nav ? 'nav active' : 'nav'} fixed="top" expand="lg">
            <Container>
              <Navbar.Brand href="#home">
                  <img className='active' src={logo} alt="" />
              </Navbar.Brand>
              <Navbar.Toggle className="tg" aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto" style={{fontSize: 20, fontWeight: 500}}>
                  <LinkContainer style={{color: "white", paddingLeft: 35}} to='/'>
                    <Nav.Link>Home</Nav.Link>
                  </LinkContainer>
                  <LinkContainer style={{color: "white", paddingLeft: 35}} to='/services'>
                    <Nav.Link>Services</Nav.Link>
                  </LinkContainer>
                  <LinkContainer style={{color: "white", paddingLeft: 35}} to='/pricing'>
                    <Nav.Link>Pricing</Nav.Link>
                  </LinkContainer>
                  <LinkContainer style={{color: "white", paddingLeft: 35}} to='/company'>
                    <Nav.Link>Company</Nav.Link>
                  </LinkContainer>
                  <LinkContainer style={{color: "white", paddingLeft: 35}} to='/berita'>
                    <Nav.Link>Berita Hangat</Nav.Link>
                  </LinkContainer>
                </Nav>
                <button className="btn btn-primary">GET STARTED</button>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </Row>
      </Container>
    </div>
  );
};

export default NavbarComp;
