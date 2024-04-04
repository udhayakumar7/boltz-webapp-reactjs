import {createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom'
// Pages 
import Home from './pages/home/Home';
import Product from './pages/product/Product';
import ProductDetail from './pages/productDetail/ProductDetail';
// componets 
import Footer from './components/footer/Footer';
import Header from './components/header/Header';
// css 
import './App.css';




// layout 
const Layout = () =>{
  return(
    <>
     <Header />
     <Outlet />
     <Footer />
    </>
  )
}
const router = createBrowserRouter([
  {
     element : <Layout />,
      children : [
        { path : '/', element : <Home />}, 
        { path : '/products', element : <Product />},
        { path : '/products/:id', element : <ProductDetail />}, 
      ]
  }
])
function App() {
   return (
    <>
     <RouterProvider router={router} />
    
    </>
  );
}

export default App;
