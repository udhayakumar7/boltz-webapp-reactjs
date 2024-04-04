import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from 'react-router-dom';
import { AiFillThunderbolt } from "react-icons/ai";
import { RiShoppingCartFill } from "react-icons/ri";
import { FaUserLarge } from "react-icons/fa6";
const Header = () => {
  const [isscroll, setIsscroll] = useState(false);

  useEffect(()=>{

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };


  })

  const handleScroll = () =>{
    if(window.scrollY> 80)
    {
      setIsscroll(true)
    }
    else if(window.scrollY< 80){
      setIsscroll(false)
    }
    else{
      setIsscroll(false)
    }
  }
  

   return (
    <Navbar expand="lg" className={isscroll ? `bg-body-tertiary navbar scrolled` : `bg-body-tertiary navbar`}>
    <Container >
      <NavLink className="logo" to="/"><AiFillThunderbolt /><span>BOLTZ</span></NavLink>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll">
        
        <Form className="d-flex me-auto w-30">
          <Form.Control
            type="search"
            placeholder="Search"
            className="me-2 custom_input"
            aria-label="Search"
          />
         
        </Form>
        <Nav className=" my-2 my-lg-0 align-items-center">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/true-wireless">True Wirless</NavLink>
          <NavLink to="/neck-band">Neck Bands</NavLink>
          <NavLink to="/wired">Wired</NavLink>
          <NavLink className={"user_acc"} to="/cart"><RiShoppingCartFill style={{fontSize:"18px,",margin:"0px 4px"}} /> Cart</NavLink>
          {/* <NavLink className={"user_acc"} to="/cart"><FaUserLarge style={{fontSize:"16px,",margin:"0px 7px"}}  />Kumar</NavLink> */}
          <button className={"login_button"}>Login</button>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
  )
}

export default Header