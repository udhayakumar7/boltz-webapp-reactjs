import React, { useEffect, useState } from 'react'

import ProductCard from '../ProductCard/ProductCard'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { getNewProducts } from '../../redux/productSlice';

const LastestProduts = () => {
  const dispatch = useDispatch();
  const getNew = useSelector((state) => state?.product?.products?.data);
  

  useEffect(() => {

    dispatch(getNewProducts());
   
   }, [])

   useEffect(()=>{
    console.log(getNew, "getProducts")
   },[])


  return (
    <div className='main_section'>
      <Container>
      <h2 className='section_title'>Latest Products</h2>

      <Row className='flex-no-wrap'>
        {
          getNew?.map((item, i)=>{

            return(
              
             <Col lg={3} key={item?.id} >
              <ProductCard 
             dataImage = {item?.attributes?.image?.data?.attributes?.url} 
             title={item?.attributes?.title} 
             price={item?.attributes?.price} 
             rattings = {item?.attributes?.rattings}
             reviews = {item?.attributes?.reviews}
             playback = {item?.attributes?.playback}
             IsNew ={item?.attributes?.IsNew}
             />
             </Col>
            
         
            )

          })
        }
        
      </Row>

     

      </Container>
    </div>
  )
}

export default LastestProduts