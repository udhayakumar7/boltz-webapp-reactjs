import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'

import styled from 'styled-components'
import { PLAYSTORE } from '../../assets'
import { FaFacebook } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";
import { FaXTwitter } from "react-icons/fa6";
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
             <p className='mt-3'>thunderboltz@gmail.com</p>
             <p className='mt-3'>925-444-7335</p>
             <div className='mt-4'>
              <FaFacebook  fontSize={22} color='#fff'/>
              <IoLogoInstagram className='mx-2' fontSize={22} color='#fff' />
              <FaXTwitter fontSize={22} color='#fff' />
             </div>


           </div>
            
           
          
          </Col>
          <Col lg={3}>
          <div className='quickLinks'>
          <h1 className='footer_header'>Quick Links</h1>
          <ul>
              <li>Home</li>
              <li>True Wirelss</li>
              <li>Neckbands</li>
              <li>Wired</li>
              <li>Faq</li>
              <li>Contact</li>
            </ul>

          </div>
           
           
          
          </Col>
          <Col lg={3}>
          <div className='quickLinks'>
          <h1 className='footer_header'>Information</h1>
          <ul>
              <li>Terms and Conditions</li>
              <li>Privacy Policy</li>
              <li>Shipping Policy</li>
              <li>Refund Policy</li>
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
            <p className=''>Copyright © 2023 THUNDER BOLTZ  PRIVATE LIMITED</p>
          </Col>
        </Row>

      </Container>


    </FooterSection>
  )
}

export default Footer