import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Style from './Header.module.css'
import { BsCart3 } from "react-icons/bs";
function Header() {
  return (
<>
<Navbar expand="lg" sticky="top" style={{backgroundColor:"rgb(0,0,0,0.5)"}}>
      <Container fluid>
        {/* <Navbar.Brand href="#">Navbar scroll</Navbar.Brand> */}
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" style={{justifyContent:'center',height:'60px'}}>
          <Nav            
            style={{ maxHeight: '100px',display:'flex',gap:'20px'}}
            navbarScroll
          >
            <Nav.Link href="/Home"><div style={{color:'white',fontSize:'18px'}} className={Style.headerTitle}>Home</div></Nav.Link>
            <Nav.Link href="/Team"><div style={{color:'white',fontSize:'18px'}} className={Style.headerTitle}>Our Team</div></Nav.Link>
            <Nav.Link href="/FAQ"><div style={{color:'white',fontSize:'18px'}} className={Style.headerTitle}>FAQ</div></Nav.Link>
          </Nav>
        </Navbar.Collapse>
        <Nav.Link href="/Cart"><BsCart3 style={{marginRight:"30px"}} width={100} height={100} color='#FFFFFF'/></Nav.Link>
      </Container>
    </Navbar>
</>
  )
}

export default Header