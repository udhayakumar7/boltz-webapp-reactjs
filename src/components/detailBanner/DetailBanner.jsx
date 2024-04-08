import React from 'react'
import { BANNER_4, BANNER_5, BANNER_6 } from '../../assets';
import Container from 'react-bootstrap/esm/Container';
import styled from 'styled-components'

const DetailBackGroundImage = styled.div `
background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${props => props.banner});
height: 80px;
width: 100%;
background-repeat: no-repeat;
background-size: cover;
background-position: center;
background-clip: border-box;
`


const DetailBanner = () => {
  return (
    <>
    <DetailBackGroundImage banner={BANNER_4}> </DetailBackGroundImage>
    </>
  )
}

export default DetailBanner