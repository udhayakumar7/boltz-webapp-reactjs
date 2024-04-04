import React from 'react'
import styled from 'styled-components'
import { ADD_BANNER_1, ADD_BANNER_IMG, BANNER_1, BANNER_5,  } from '../../assets'
import Container from 'react-bootstrap/esm/Container'
import Row from 'react-bootstrap/esm/Row'
import Col from 'react-bootstrap/esm/Col'

const AddBanner = () => {

    const BackGroundImage = styled.div `
    height: 450px;
    width: 100%;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: top center;
    background-clip: border-box;
    background: #f2f2f2;

   
  `
  const Button = styled.button `
      display: inline-block;
    font-size: 17px;
    padding: 8px 16px;
    border-radius: 30px;
    border: 2px solid #222 !important;
    background: #222;
    color: #fff;
    width: 175px;
    border: none;
    outline: none;
    font-weight: 600;
    margin-top: 10px;
    transition: 0.24s all ease-in-out;
  `


  return (
    <div > 
        <BackGroundImage>
            <Container>
                <Row>
                    <Col lg={7}>
                    <div className='content'>
                    
                    <h3>
                      Wireless Headphones
                      </h3>
                      <h2>Starting from <span>₹ 999</span> </h2>
                      <Button>Shop Now</Button>

                    </div>
                      
                    
                    </Col>
                    <Col lg={5} className='text-end banner_add_d-noe'>

                   <img  className='banner_add_img img-fluid' src={ADD_BANNER_IMG} alt="" />
                    
                    </Col>
                </Row>
            </Container>

             


        </BackGroundImage>



    </div>
  )
}

export default AddBanner