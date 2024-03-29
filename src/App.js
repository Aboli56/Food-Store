import React from 'react';
import './App.css';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
import Home from "./pages/Home/index";
import Cart from "./pages/Cart/index";

const App = () => {
  return (
    <div className='container'>
      <BrowserRouter>
        <Routes>
          <Route  path='/' element={<Home/>} />
          <Route  path='/cart' element={<Cart/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;