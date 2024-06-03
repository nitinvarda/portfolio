import React, { useContext, useState } from 'react';
// import './Navbar.css';
import { Navbar, Nav, Container, Form } from 'react-bootstrap'
import AppContext from '../utils/AppContext';
const NavBar = () => {
    const [showDetails,setShowDetails] = useState(false);
    const context = useContext(AppContext);
    window.addEventListener('scroll',(e)=>{

        if(window.scrollY > 618){
            setShowDetails(true)
        }
        else{
            setShowDetails(false);
        }
       
    });
    return (

        <Navbar collapseOnSelect style={{ backgroundColor: '#222',borderBottom:`${showDetails ? '1' : '0'}px solid white` }} expand="xl" variant="dark" fixed="top">
            <Container>
                {/* <Navbar.Brand href="#home"><h3 style={{fontFamily:'Sacramento'}}>Nitin Varda</h3></Navbar.Brand> */}
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    {showDetails && 
                        <Nav >
                            <h6 className='text-center  text-white' style={{fontFamily:'Sacramento',fontSize:`clamp(2.0rem ,  -0.875rem + 9.333vw, 2.3rem)`,margin:2,}}>Nitin Varda</h6>
                        </Nav>
                    }
                    <Nav className='ml-auto'>
                        <Nav.Link href="#about">About</Nav.Link>
                        <Nav.Link href="#skills" >Skills</Nav.Link>
                        <Nav.Link href="#project">Projects</Nav.Link>
                        <Nav.Link  onClick={()=>context.changeTheme()} style={{display:'flex',flexDirection:'row',justifyContent:'center',alignItems:'center'}}>{context.darkTheme ? 'Light Theme' : 'Dark Theme' }</Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>

    );
}

export default NavBar;
