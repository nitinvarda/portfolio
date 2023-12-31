import React from 'react';
// import './Navbar.css';
import { Navbar, Nav, Container } from 'react-bootstrap'

const NavBar = () => {
    return (
        <Navbar collapseOnSelect style={{ backgroundColor: '#222',}} expand="lg" variant="dark" fixed="top">
            <Container>
                {/* <Navbar.Brand href="#home"><h3 style={{fontFamily:'Sacramento'}}>Nitin Varda</h3></Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className='ml-auto'>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#skills" >Skills</Nav.Link>
                        <Nav.Link href="#project">Projects</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavBar;
