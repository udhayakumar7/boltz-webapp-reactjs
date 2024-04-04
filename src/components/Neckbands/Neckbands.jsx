import { useDispatch, useSelector } from "react-redux";
import { getNeckProducts } from "../../redux/productSlice";
import { useEffect } from "react";
import ProductCard from '../ProductCard/ProductCard'
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const Neckbands = () => {

    const dispatch = useDispatch();
    const getprod = useSelector((state) => state?.product?.neckbands?.data);
    
  
    useEffect(() => {
  
      dispatch(getNeckProducts());
     
     }, [dispatch])
  
     useEffect(()=>{
      console.log(getprod, "getprod")
     },[])
  
  
    return (
        <div className='main_section'>
        <Container>
        <h2 className='section_title'>Neck Bands</h2>
  
        <Row className='flex-no-wrap'>
          {
            getprod?.map((item, i)=>{
  
              return(
                
               <Col lg={3} key={i} >
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
  

export default Neckbands