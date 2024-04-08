import React from 'react'
import { FaStar } from "react-icons/fa6";
import { FaRegStar } from "react-icons/fa";
import PropTypes from 'prop-types';
import {useNavigate} from 'react-router-dom'
import { selectUser } from '../../redux/authuserSlice';
import { useSelector, useDispatch } from "react-redux";
import { openModal } from '../../redux/loginmodelSlice';

const ProductCard = (props) => {

  const user = useSelector(selectUser); 
  const dispatch = useDispatch()

  const {title, dataImage, price, rattings, reviews, playback, IsNew, wired, isid} = props;

  const navigate = useNavigate()

  const renderStars = () => {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      if (i <= rattings) {
        stars.push(<FaStar className='me-1' style={{fontSize:"15px", color:"#ffcc00",}}  />);
      } else {
        stars.push(<FaRegStar className='ms-1' style={{fontSize:"15px", color:"#ffcc00"}} />);
      }
    }
    return stars;
  };
 
  const gotoCart = (id) =>{

    if(!user){
      dispatch(openModal());
    }
    else{
      navigate(`/products/${id}`)
      console.log(id)
    }


    

    
    
  }
  const gotodetail = (id) =>{

  
      navigate(`/products/${id}`)
   


    

    
    
  }
    
  return (

    <div className='product_card'>
        <img  onClick={()=>gotodetail(isid)} src={`${dataImage}`} alt='' />
        {
          wired === true ? "" : 
          <h3 className='playback_detail'>{playback} Hours Playback</h3>
        }
        
        {
          IsNew === true ? 
        <p className='new_label'><span className='dot'></span> New</p>
         : ""

        }
        <div className='product_detail'>
          
        <h2>{title}</h2>
        <p>₹ {price}.00</p>
        {/* <p>{(string).substring(0, 30) + '...'}</p> */}
        <div className='mt-1 ratting_rev'>
        {renderStars()}
        <span className='reviews_count'>{reviews} reviews</span>
        </div>
        <button  className='add_cart_button' onClick={()=>gotoCart(isid)}>Add to Cart</button>
        </div>
        

    </div>

  )
}

ProductCard.prototype ={
  title: PropTypes.any,
  dataImage: PropTypes.any,
  price: PropTypes.any,
  rattings: PropTypes.any,
  reviews: PropTypes.any,
  playback: PropTypes.any,
  IsNew: PropTypes.any,
}

export default ProductCard