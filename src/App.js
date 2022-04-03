
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import NotFound from './NotFound/NotFound';
import ReviewCart from './ReviewCart/ReviewCart';
import About from './About/About';
import ProductDetails from './ProductDetails/ProductDetails'
import { createContext } from 'react';
import useProducts from './Hooks/Products';

export const ProductsContext = createContext('product')
function App() {
  const [products, setProducts] = useProducts()
  return (
    <ProductsContext.Provider value={[products, setProducts]}>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/reviewcart' element={<ReviewCart />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/product/:id' element={<ProductDetails />} ></Route>




        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </ProductsContext.Provider>
  );
}

export default App;
