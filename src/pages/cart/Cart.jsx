import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { RiDeleteBin6Line } from "react-icons/ri";
import PAYMENT from '../../assets/images/footer-pay.png';
import PAYMENT_1 from '../../assets/images/footer-pay-1.png'
import { useSelector, useDispatch  } from "react-redux";
import { decreaseItemQuantity, increaseItemQuantity, removeItem } from "../../redux/cartSlice";

const Cart = () => {

  const dispatch = useDispatch();

  const cartItems = useSelector((state)=> state?.cart?.cartItems)
  const totalQuanty = useSelector((state)=> state?.cart?.cartQuanty)
  const cartTotal = useSelector((state)=> state?.cart?.cartTotal)
  console.log(cartItems)

  const decrement = (id, quantity) =>{

    if(quantity <= 1){

      dispatch(removeItem(id))
    }
    else{
      dispatch(decreaseItemQuantity(id))
    }

    

    console.log(quantity, "quantity")

  }


  return (
    <div className="my-5">
      <Container>
        <Row>
          <Col lg={8}>
            <div className="cart_items_container">
              <div className="cart_header">
                <h2>My cart ({totalQuanty})</h2>
              </div>

              <div className="car_items_details">
                <table className="w-100">
                  <th>Item</th>
                  <th>Qty</th>
                  <th> Price</th>

                  <tbody>
                    {
                      cartItems && cartItems?.map((item, index)=>{
                        return(
                          <tr key={index}>
                          <td className="cart_main_td">
                            <div className="car_items_details_data">
                              <div className="cart_img">
                                <img
                                   src={item?.attributes?.image?.data?.attributes?.url}
                                  alt="product"
                                />
                              </div>
                              <div className="car_items_details_content">
                           
                                <h2 className="mt-2">{item?.attributes?.title}</h2>
                                {/* <p className="price">₹ 999.00</p> */}
                                <p>{item?.attributes?.descriptions}</p>
                              </div>
                            </div>
                          </td>
                          <td>
                            <div className="quantity">
                                <label onClick={()=>decrement(item?.id, item?.quantity)} >-</label>
                                <span>{item?.quantity}</span>
                                <label onClick={()=>dispatch(increaseItemQuantity(item?.id))}>+</label>
                            </div>
                          </td>
                          <td style={{position:"relative"}}>
                          <p className="price">₹ {  item?.attributes?.price * item?.quantity }.00</p>
                           <RiDeleteBin6Line className="del_icon" onClick={()=>dispatch(removeItem(item?.id))}/>
                          </td>
    
                        </tr>
                        )
                      })
                    }

                    <tr>
                      {
                        cartItems && cartItems?.length === 0 ? <td colSpan={6} className="text-center">No Items in Cart</td> : <></>
                      }
                    </tr>
                   
                  </tbody>
                </table>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div className="subtotal">
                <h2>Total</h2>
                <table className="w-100 mt-4">
                    <tr>
                        <td>Sub Total</td>
                        <td>₹ {cartTotal.toFixed(2)}</td>
                    </tr>
                    <tr>
                      <td>Delivery Charge</td>
                        <td>₹ 0.00</td>
                    </tr>
                    <tr>
                      <td>Total Amount</td>
                        <td>₹ {cartTotal.toFixed(2)}</td>
                    </tr>

                </table>
                <div className="payment mt-4">
                    <img src={PAYMENT} alt="payment-type" />
                    <img src={PAYMENT_1} alt="payment-type" />
                </div>
                <button className="check-out">Checkout</button>

            </div>
 

          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Cart;
