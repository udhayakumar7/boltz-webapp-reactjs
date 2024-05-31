import React, { useEffect } from 'react'
import LastestProduts from '../../components/Latest/LastestProduts'
import { useLocation, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import TrueWireless from '../../components/TrueWireless/TrueWireless';
import Neckbands from '../../components/Neckbands/Neckbands';
import Wired from '../../components/Wired/Wired';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
const ProductList = () => {

    const location = useLocation();

    



    useEffect(() => {
       console.log(location.pathname)
    return () => {
         
        };
      },[]);


  return (
    <div className='product_list'>

      <div className='container braed_cctr '>
      <Breadcrumb className='custom-bread'>
      <Breadcrumb.Item href="/">Home</Breadcrumb.Item>
      <Breadcrumb.Item active>
        {
          location.pathname === '/products/wire-less' ? <span>True Wireless</span> :  location.pathname === '/products/neck-bands' ? <span>Neck Bands</span> :  location.pathname === '/products/wired' ? <span>Wired</span> : ""
        }
      </Breadcrumb.Item>
    </Breadcrumb>
      </div>

        {
            location.pathname === '/products/wire-less' ? <TrueWireless /> :  location.pathname === '/products/neck-bands' ? <Neckbands /> :  location.pathname === '/products/wired' ? <Wired /> : ""
        }
    
    </div>
  )
}

export default ProductList