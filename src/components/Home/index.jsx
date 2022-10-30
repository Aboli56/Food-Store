import React from 'react';
import Logo from '../common/Logo';
import './styles.css';


const Banner = ({ handleScrollMenu }) => (
  <header>
    <div className='header-content'>
       <Logo/>
      <div className='content-main'>
        <h1> Delicious food🍔 for your cravings</h1>
        <p>We made fresh and healthy meals with different recipes</p>
        <button onClick={handleScrollMenu}>
          View Menu <i className='fas fa-long-arrow-alt-right'></i>
        </button>
      </div>
    </div>
    <img className='header-img' src="https://images.unsplash.com/photo-1605851868183-7a4de52117fa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8MTYwfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60" alt='banner' />
  </header>
);

export default Banner;