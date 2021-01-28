/** @format */

import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  const activeStyle = { color: '#F15B2A' };

  return (
    <nav className='navbar fixed-top navbar-expand-lg navbar-dark bg-dark mb-1'>
      <NavLink exact activeStyle={activeStyle} className='nav-link' to='/'>
        Acceuil
      </NavLink>
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
          <li className='nav-item'>
            <NavLink
              activeStyle={activeStyle}
              to='formulaires'
              className='nav-link'
            >
              Formulaire <span className='sr-only'>(current)</span>
            </NavLink>
          </li>
          <li className='nav-item'>
            <NavLink
              activeStyle={activeStyle}
              to='statistiques'
              className='nav-link'
            >
              Statistiques
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Header;
