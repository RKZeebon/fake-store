
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './Home/Home';
import Navbar from './Navbar/Navbar';
import NotFound from './NotFound/NotFound';
import ReviewCart from './ReviewCart/ReviewCart';
import About from './About/About';

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/home' element={<Home />}></Route>
        <Route path='/reviewcart' element={<ReviewCart />}></Route>
        <Route path='/about' element={<About />}></Route>




        <Route path='*' element={<NotFound />}></Route>
      </Routes>
    </div>
  );
}

export default App;
