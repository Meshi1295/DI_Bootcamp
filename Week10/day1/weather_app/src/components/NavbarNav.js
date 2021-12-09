import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import '../style/NavbarNav.css'

class NavbarNav extends React.Component {
  render() {
    return (
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">Herolo Weather App</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto ">
            <Link className="route" to="/Home">Home</Link>
            <Link className="route" to="/Favorite">Favorite</Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>


    )
  }
}

export default NavbarNav;
