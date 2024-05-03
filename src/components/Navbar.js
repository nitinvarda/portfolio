import React, { useState } from 'react';
// import './Navbar.css';
import { Navbar, Nav, Container } from 'react-bootstrap'
const NavBar = () => {
    const [showDetails,setShowDetails] = useState(false);
    window.addEventListener('scroll',(e)=>{

        if(window.scrollY > 618){
            setShowDetails(true)
        }
        else{
            setShowDetails(false);
        }
       
    });
    return (

        <Navbar collapseOnSelect style={{ backgroundColor: '#222' }} expand="lg" variant="dark" fixed="top">
            <Container>
                {/* <Navbar.Brand href="#home"><h3 style={{fontFamily:'Sacramento'}}>Nitin Varda</h3></Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">

                    <Nav className='mr-auto'>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#skills" >Skills</Nav.Link>
                        <Nav.Link href="#project">Projects</Nav.Link>
                    </Nav>
                    {showDetails && 
                    <>
                        <Nav className='mr-auto'>
                            <h6 className='text-center  text-white' style={{fontFamily:'Sacramento',fontSize:`clamp(2.3rem ,  -0.875rem + 9.333vw, 2.5rem)`,margin:0,fontWeight:'bold'}}>Nitin Varda</h6>
                        </Nav>
                        <Nav className='mr-auto'>
                           <h6 className='text-white'>facebook</h6>
                           <h6 className='text-white'>instagram</h6>
                           <h6 className='text-white'>linkedin</h6>
                           <h6 className='text-white'>facebook</h6>
                           
                        </Nav>
                    </>
                    }
                    
                   
                
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavBar;
