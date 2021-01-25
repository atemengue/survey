/** @format */

import React from 'react';

const Header = () => {
  return (
    <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-1'>
      <a className='navbar-brand'>Acceuil</a>
      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#navbarSupportedContent'
        aria-controls='navbarSupportedContent'
        aria-expanded='false'
        aria-label='Toggle navigation'
      >
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='navbarSupportedContent'>
        <ul className='navbar-nav mr-auto'>
          <li className='nav-item active'>
            <a className='nav-link'>
              Formulaire <span className='sr-only'>(current)</span>
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link'>Statistiques</a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
