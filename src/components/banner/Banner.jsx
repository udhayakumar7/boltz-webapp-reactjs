import React, { useRef } from "react";
import { BANNER_5, BANNER_6 } from "../../assets";
import { Container, Row, Col } from "react-bootstrap";
import styled from "styled-components";
import Slider from "react-slick";
import { IoChevronBackOutline, IoChevronForward } from "react-icons/io5";
import OFFER_1 from '../../assets/images/offer_2.png'
import OFFER_2 from '../../assets/images/offer_1.webp'

const BackGroundImage = styled.div`
  background-image: url(${(props) => props.banner});
  height: 100vh;
  width: 100%;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  background-clip: border-box;
  @media screen and (max-width: 540px) {
    height: 300px !important;
    background-image: linear-gradient(
        rgba(0, 0, 0, 0.496),
        rgba(0, 0, 0, 0.479)
      ),
      url(${(props) => props.banner});
  }
  @media screen and (max-width: 1380px) {
    height: 550px;
  }
`;

const Content = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 40px;

  @media screen and (max-width: 540px) {
    align-items: center;
    padding: 0px;
  }

  @media screen and (max-width: 820px) {
    width: 100%;
  }
`;
const HeadingOne = styled.h2`
  font-size: clamp(2.125rem, 1.4575rem + 3.5599vi, 4.875rem);
  font-weight: 700;
  color: #fff;
  line-height: 84px;
  margin-bottom: 16px;

  @media screen and (max-width: 1024px) {
    line-height: normal;
    margin-bottom: 8px;
  }
  @media screen and (max-width: 540px) {
    font-size: 32px;
  }
`;
const HeadingTwo = styled.h3`
  font-size: clamp(1.75rem, 1.2646rem + 2.589vi, 3.75rem);
  font-weight: 500;
  color: #fff;
  margin-bottom: 16px;
  @media screen and (max-width: 1024px) {
    margin-bottom: 8px;
  }
  @media screen and (max-width: 540px) {
    font-size: 26px;
  }
`;
const HeadingThree = styled.h4`
  font-size: clamp(1.0625rem, 0.926rem + 0.7282vi, 1.625rem);
  font-weight: 400;
  color: #fff;
  margin-bottom: 0px;
  @media screen and (max-width: 540px) {
    font-size: 14px;
  }
`;
const Button = styled.button`
  display: inline-block;
  font-size: 17px;
  padding: 8px 16px;
  border-radius: 30px;
  border: 2px solid #fff !important;
  background: #fff;
  color: #222;
  width: 175px;
  border: none;
  outline: none;
  font-weight: 600;
  margin-top: 20px;
  transition: 0.24s all ease-in-out;

  &:hover {
    background-color: transparent;
    color: #fff;
  }

  span {
    color: #ff3939 !important;
  }
  @media screen and (max-width: 1024px) {
    width: 160px;
    font-size: 16px;
  }
  @media screen and (max-width: 540px) {
    width: 140px;
    font-size: 14px;
    margin-top: 12px;
  }
`;

const Banner = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
  };
  const sliderRef = useRef(null);

  
  return (
    <div className="new_slider_section">
      <Container>
        <Row>
          <Col lg={9} style={{position: "relative"}}>
            <Slider ref={sliderRef} {...settings}>
              <div className="border_none">
                <img
                  src="https://www.boat-lifestyle.com/cdn/shop/files/IPL_HP_Banner_WEB_1_1440x.jpg?v=1712576793"
                  alt="banner"
                />
              </div>
              <div className="border_none">
                <img
                  src="https://www.boat-lifestyle.com/cdn/shop/files/Airdopes_Supreme_Banner_WEB_1515c104-abee-4263-8e44-4511088592de_1600x.jpg?v=1712209151"
                  alt="banner"
                />
              </div>
              <div className="border_none">
                <img
                  src="https://www.boat-lifestyle.com/cdn/shop/files/RS_Banner_WEB_2_1440x.png?v=1707810457"
                  alt="banner"
                />
              </div>
              
            </Slider>
            <div className="custom-arrows">
              
               
              <IoChevronBackOutline className="arrow" onClick={() => sliderRef?.current?.slickPrev()} />
              <IoChevronForward className="arrow"  onClick={() => sliderRef?.current?.slickNext()}/>
                
              </div>
          </Col>
          <Col lg={3} className="">
            <div className="offers">
              <div className="offer_1">
                <div className="offercontent">
                <h3>Early birds Offer<br /><span>Buds Gen 3</span></h3>
                <p>Discount 20% on each item</p>
                </div>
                <div className="img_con">
                  <img src={OFFER_1} alt="" />
                </div>

              </div>
              <div className="offer_2">
              <div className="offercontent">
                <h3>New Smart Watch<br /><span>SMT-43 Pro</span></h3>
                <p>Comming soon</p>
                </div>
                <div className="img_con">
                  <img src={OFFER_2} alt="" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>

      {/* <div className='border_none'>
        
        <BackGroundImage banner={BANNER_6}>
            <Container className='h-100'>
            <Content>
                <HeadingOne>UP TO 75% OFF </HeadingOne>
                <HeadingTwo>Wireless Headphones</HeadingTwo>
                <HeadingThree>Starting from <span>₹999</span></HeadingThree>
                <Button>Shop Products </Button>
            </Content>
            </Container>
        </BackGroundImage>
      </div> */}
    </div>
  );
};

export default Banner;
