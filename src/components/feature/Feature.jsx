import React from 'react'
import Col from 'react-bootstrap/esm/Col'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import styled from 'styled-components'
import { LiaShippingFastSolid } from "react-icons/lia";
import { RiRefund2Line } from "react-icons/ri";
import { BiSupport } from "react-icons/bi";
import { HiOutlineCreditCard } from "react-icons/hi2";

const FeatureCard = styled.div `
width: 100%;
height: 150px;
background: #f6f6f6;
display: flex;
align-items: center;
justify-content: center;
gap: 20px;
border-radius: 10px;

@media screen and (min-width: 991px) and (max-width: 1380px){
   height: 150px;
   display: block;
   padding: 16px 20px;
   text-align: center;
}

@media screen and (max-width:800px) {

   height: 120px;
   margin-bottom: 10px;
   
}


`
const FeatureTitle = styled.h2 `
margin: 5px 0px;
font-size: 20px;
font-weight: 600;


`
const FeatureSubTitle = styled.h2 `
margin: 5px 0px;
font-size: 16px;
font-weight: 400;

`

const Feature = () => {
  return (
    <div className='main_section'>
    <Container>
        <Row>
            <Col  lg={3} sm={6}>
               <FeatureCard>
                 <div>
                    <LiaShippingFastSolid fontSize={32} />
                 </div>
                 <div>
                    <FeatureTitle>Free Devivery</FeatureTitle>
                    <FeatureSubTitle>Free shipping on all order</FeatureSubTitle>
                 </div>


               </FeatureCard>
            </Col>
            <Col lg={3} sm={6}>
               <FeatureCard>
                 <div>
                    <RiRefund2Line fontSize={32} />
                 </div>
                 <div>
                    <FeatureTitle>Returns</FeatureTitle>
                    <FeatureSubTitle>Back guarantee under 7 days </FeatureSubTitle>
                 </div>


               </FeatureCard>
            </Col>
            <Col lg={3} sm={6}>
               <FeatureCard>
                 <div>
                    <BiSupport fontSize={32} />
                 </div>
                 <div>
                    <FeatureTitle>Support 24/7</FeatureTitle>
                    <FeatureSubTitle>Support online 24 hours a day</FeatureSubTitle>
                 </div>


               </FeatureCard>
            </Col>
            <Col lg={3} sm={6}>
               <FeatureCard>
                 <div>
                    <HiOutlineCreditCard fontSize={32} />
                 </div>
                 <div>
                    <FeatureTitle>Payments</FeatureTitle>
                    <FeatureSubTitle>Free shipping on all order</FeatureSubTitle>
                 </div>


               </FeatureCard>
            </Col>
        </Row>


    </Container>
    </div>
  )
}

export default Feature