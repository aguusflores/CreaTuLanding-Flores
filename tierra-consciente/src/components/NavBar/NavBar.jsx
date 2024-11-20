import React from 'react'
import CarWidget from '../CarWidget/CarWidget'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './NavBar.css';

const NavBar = ({ valor }) => {
  return (
    <>
      <Navbar expand="lg" className="bg-body-tertiary">
        <Container className="d-flex justify-content-between align-items-center">
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto d-flex flex-row gap-3">
              <Nav.Link href="#home" className="text-uppercase">Home</Nav.Link>
              <Nav.Link href="#link" className="text-uppercase">Puntos de venta</Nav.Link>
              <NavDropdown title="Productos" id="basic-nav-dropdown" className="text-uppercase">
                <NavDropdown.Item href="#action/3.1">Higiene bucal</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Higiene Corporal</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Hogar</NavDropdown.Item>
                <NavDropdown.Divider />
                
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      
      <div>
        <CarWidget valor={valor} />
      </div>
    </>
  );
};

export default NavBar;
