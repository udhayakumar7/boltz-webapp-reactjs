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
import ProductView from './components/Product-view/ProductView';
import Cart from './pages/cart/Cart';
import ProductList from './pages/product-list/ProductList';
import SearchResults from './pages/search-results/SearchResults';




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
        { path : '/products/wire-less', element : <ProductList />},
        { path : '/products/neck-bands', element : <ProductList />},
        { path : '/products/wired', element : <ProductList />},
        { path : '/products/:id', element : <ProductDetail />}, 
        { path : '/products/360-view/:name', element : <ProductView />}, 
        { path : '/cart', element : <Cart />}, 
        { path : '/search', element : <SearchResults />}, 
        { path : '*', element : <div>404 error</div>}, 
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
