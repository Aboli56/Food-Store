import React from 'react';
import { NavLink } from 'react-router-dom';
import './styles.css';

const EmptyCart = () => {
  return (
    <div className='emptyCart'>
      <img src='https://static.vecteezy.com/system/resources/thumbnails/008/515/488/small/empty-cart-flat-illustration-concept-vector.jpg' alt='' />
      <NavLink to="/">
        <button> Shop Now <i className='fas fa-long-arrow-alt-right'></i></button>
      </NavLink>
    </div>
  );
};

export default EmptyCart;