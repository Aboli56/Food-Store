import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import { createStructuredSelector } from 'reselect';
import { selectCartItemsCount } from '../../../redux/cart/cart.selector';
import './styles.css';

const ButtonCartCount = ({ cartCount }) => {
  
  return (
    <NavLink to="/cart">
    <div className='btnCartCount'>
      <div className='count'>{cartCount >= 100 ? '99+' : cartCount}</div>
      <i class='fas fa-shopping-cart'></i>
    </div>
    </NavLink>
  );
};

const mapStateToProps = createStructuredSelector({
  cartCount: selectCartItemsCount,
});

export default connect(mapStateToProps)(ButtonCartCount);