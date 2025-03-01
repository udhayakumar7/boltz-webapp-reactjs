import { useDispatch, useSelector } from "react-redux";
import { getTWTProducts } from "../../redux/productSlice";
import { useEffect } from "react";
import ProductCard from '../ProductCard/ProductCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Link } from "react-router-dom";

const TrueWireless = () => {

    const dispatch = useDispatch();
    const getTwT = useSelector((state) => state?.product?.twtproducts?.data);
    
  
    useEffect(() => {
  
      dispatch(getTWTProducts());
     
     }, [dispatch])
  
     useEffect(()=>{
      console.log(getTwT, "getTwT")
     },[])
  
  
    return (
        <div className='main_section' id="true">
        <Container>
            <div className='new-section-title'>
                  <h2 className='section_title'>True Wireless</h2>
                   {getTwT?.length > 6 &&  <h6 className='m-0'> <Link to={'/products/wire-less'} >View all</Link> </h6>} 
                  </div>
        
  
        <Row className='flex-no-wrap'>
          {
            getTwT?.map((item, i)=>{
  
              return(
                
               <Col xs={6} sm={4} lg={2}  key={item?.id} >
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
  

export default TrueWireless