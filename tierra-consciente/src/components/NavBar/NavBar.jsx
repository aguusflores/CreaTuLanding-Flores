import React from 'react'
import CarWidget from '../CarWidget/CarWidget'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';

const NavBar = ({ valor }) => {
  return (
    <>
      
      <div>
        <CarWidget valor={valor} />
      </div>
    </>
  );
};

export default NavBar;