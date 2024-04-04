import React from 'react'
import { BANNER_5, BANNER_6 } from '../../assets';
import Container from 'react-bootstrap/esm/Container';
import styled from 'styled-components'



const BackGroundImage = styled.div `
background-image: url(${props => props.banner});
height: 100vh;
width: 100%;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-clip: border-box;
@media screen and (max-width:540px) {
  height: 450px !important;

}
@media screen and (max-width:1056px) {
  height: 550px;

}
  `

const Content = styled.div `
    width: 70%;
    height: 100%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding-top: 40px;

    @media screen and (max-width:820px) {
    width: 100%;

}

    
`
const HeadingOne = styled.h2 `
    font-size: clamp(2.125rem, 1.4575rem + 3.5599vi, 4.875rem);;
    font-weight: 700;
    color: #fff;
    line-height: 84px;
    margin-bottom: 16px;

    @media screen and (max-width:1024px) {

      line-height: normal;
      
    }


`
const HeadingTwo = styled.h3 `
    font-size:  clamp(1.75rem, 1.2646rem + 2.589vi, 3.75rem);
    font-weight: 500;
    color: #fff;
    margin-bottom: 16px;
    
`
const HeadingThree = styled.h4 `
  font-size: clamp(1.0625rem, 0.926rem + 0.7282vi, 1.625rem);
    font-weight: 400;
    color: #fff;
    margin-bottom: 0px;
`
const Button = styled.button `
    display: inline-block;
    font-size: 17px;
    padding: 8px 16px;
    border-radius: 30px;
    border: 2px solid #fff !important;
    background: #fff;
    color: #222;
    width: 175px;
    border: none ;
    outline: none;
    font-weight: 600;
    margin-top: 20px;
    transition: 0.24s all ease-in-out;

    &:hover{
      background-color: transparent;
      color: #fff;
    }

    span{
        color: #ff3939 !important;

    }
    @media screen and (max-width:1024px) {
      width: 160px;
      font-size: 16px;

}
`


const Banner = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows:false
      };
     
  

 


  return (
    <div>
        {/* <Slider {...settings}>
      <div className='border_none'>
        <img src={BANNER_2} alt="banner" />
      </div>
      <div className='border_none'>
        <img src={BANNER_4} alt="banner" />
      </div>
      <div className='border_none'>
        <img src={BANNER_3} alt="banner" />
      </div>
      <div className='border_none'>
        <img src={BANNER_1} alt="banner" />
      </div>
     
    
    </Slider> */}
    
    <div className='border_none'>
        
        <BackGroundImage banner={BANNER_6}>
            <Container className='h-100'>
            <Content>
                <HeadingOne>UP 75% OFF </HeadingOne>
                <HeadingTwo>Wireless Headphones</HeadingTwo>
                <HeadingThree>Starting from <span>₹999</span></HeadingThree>
                <Button>Shop Products </Button>
            </Content>
            </Container>
        </BackGroundImage>
      </div>
    
    </div>
  )
}

export default Banner