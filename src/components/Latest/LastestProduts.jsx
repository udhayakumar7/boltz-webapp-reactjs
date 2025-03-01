import React, { useEffect, useState } from 'react'

import ProductCard from '../ProductCard/ProductCard'

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useDispatch, useSelector } from 'react-redux';
import { getNewProducts } from '../../redux/productSlice';
import { Link } from 'react-router-dom';

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
        <div className='new-section-title'>
        <h2 className='section_title'>Latest Products</h2>
         {getNew?.length > 6 && <h6 className='m-0'> <Link to={'/products/latest-products'} >View all</Link> </h6> } 
        </div>
     

      <Row className='flex-no-wrap'>
        {
          getNew?.map((item, i)=>{

            return(
              
             <Col xs={6} sm={4} lg={2} key={item?.id} >
              <ProductCard 
             dataImage = {item?.attributes?.image?.data?.attributes?.url} 
             title={item?.attributes?.title} 
             price={item?.attributes?.price} 
             rattings = {item?.attributes?.rattings}
             reviews = {item?.attributes?.reviews}
             playback = {item?.attributes?.playback}
             IsNew ={item?.attributes?.IsNew}
             isid ={item?.id}
             item = {item}
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