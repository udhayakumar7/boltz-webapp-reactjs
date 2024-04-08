import { useDispatch, useSelector } from "react-redux";
import {  getWiredProducts } from "../../redux/productSlice";
import { useEffect } from "react";
import ProductCard from '../ProductCard/ProductCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Wired = () => {

    const dispatch = useDispatch();
    const getprod = useSelector((state) => state?.product?.wired?.data);
    
  
    useEffect(() => {
  
      dispatch(getWiredProducts());
     
     }, [dispatch])
  
     useEffect(()=>{
      console.log(getprod, "getprod")
     },[])
  
  
    return (
        <div className='main_section'  id="wired">
        <Container>
        <h2 className='section_title'>Wired Headphones</h2>
  
        <Row className='flex-no-wrap'>
          {
            getprod?.map((item, i)=>{
  
              return(
                
               <Col xs={6} sm={6} lg={3} key={item?.id} >
                <ProductCard 
               dataImage = {item?.attributes?.image?.data?.attributes?.url} 
               title={item?.attributes?.title} 
               price={item?.attributes?.price} 
               rattings = {item?.attributes?.rattings}
               reviews = {item?.attributes?.reviews}
               playback = {item?.attributes?.playback}
               IsNew ={item?.attributes?.IsNew}
               wired= {true}
               isid ={item?.id}
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
  

export default Wired