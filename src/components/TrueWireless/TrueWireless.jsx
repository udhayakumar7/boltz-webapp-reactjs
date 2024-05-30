import { useDispatch, useSelector } from "react-redux";
import { getTWTProducts } from "../../redux/productSlice";
import { useEffect } from "react";
import ProductCard from '../ProductCard/ProductCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

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
        <h2 className='section_title'>True Wireless</h2>
  
        <Row className='flex-no-wrap'>
          {
            getTwT?.map((item, i)=>{
  
              return(
                
               <Col xs={6} sm={6} lg={3}  key={item?.id} >
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