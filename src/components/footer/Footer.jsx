import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

import styled from 'styled-components'
import { PLAYSTORE } from '../../assets'
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom'
const FooterSection = styled.div `
width: 100%;
height: 100%;
background: #1c1c1c;
  
`

const Footer = () => {
  return (
    <FooterSection >
      <Container>
        <Row>
          <Col lg={3}>
           
           <div className='company_details'>
             <h1 className='footer_header'>Contact Us</h1>
             <h2>Thunder Boltz</h2>
             <p>4874 Park Street,  Los Angeles</p>
             <p>United States - 90075</p>
             <p className='mt-3'><Link to={'mailto:thunderboltz@gmail.com'}>thunderboltz@gmail.com</Link></p>
             <p className='mt-3'> <Link to={'tel:9254447335'}>925-444-7335</Link></p>
             <div className='mt-4'>
             <Link to={'https://www.facebook.com/'}><FaFacebook  fontSize={22} color='#fff'/></Link>
             <Link to={'https://www.instagram.com/'}><IoLogoInstagram className='mx-2' fontSize={22} color='#fff' /></Link>
             <Link to={'https://x.com/'}><FaXTwitter fontSize={22} color='#fff' /></Link>
              
              
              
             </div>


           </div>
            
           
          
          </Col>
          <Col lg={3}>
          <div className='quickLinks'>
          <h1 className='footer_header'>Quick Links</h1>
          <ul>
              <li> <Link to={'/home'}>Home</Link> </li>
              <li> <Link to={'/products/wire-less'}> True Wirelss</Link></li>
              <li> <Link to={'/products/neck-bands'}>Neckbands</Link> </li>
              <li> <Link to={'/products/wired'}>Wired</Link> x</li>
              <li> <Link to={'/'}>Faq</Link> </li>
              <li> <Link to={'/'}>Contact</Link> </li>
            </ul>

          </div>
           
           
          
          </Col>
          <Col lg={3}>
          <div className='quickLinks'>
          <h1 className='footer_header'>Information</h1>
          <ul>
              <li> <Link to={'/'} >Terms and Conditions</Link> </li>
              <li> <Link to={'/'}>Privacy Policy</Link> </li>
              <li> <Link to={'/'}>Shipping Policy</Link> </li>
              <li> <Link to={'/'}>Refund Policy</Link> </li>
            </ul>

          </div>
           
           
          
          </Col>
          <Col lg={3}>
           <div className='app_info'>
           <h1 className='footer_header'>Download</h1>
            <p>Downalod our App and get extra 20% discount on your first order</p>
           <img  src={PLAYSTORE} alt="" />

           </div>

            
          
          
          </Col>
        </Row>
        <Row className='copy_rights'>
          <Col>
            <p className=''>Copyright © 2024 Thunder Boltz Private Limited.</p>
          </Col>
        </Row>

      </Container>


    </FooterSection>
  )
}

export default Footer