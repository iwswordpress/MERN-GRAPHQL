import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function MenuBar() {
  const pathname = window.location.pathname;

  const path = pathname === '/' ? 'home' : pathname.substr(1);
  console.log(pathname, path);

  return (
    <div className='menu-desktop'>
      <Link name='home' as={Link} to='/' className='menu-item'>
        HOME
      </Link>
      <Link name='login' as={Link} to='/login' className='menu-item'>
        LOGIN
      </Link>
      <Link name='register' as={Link} to='/register' className='menu-item'>
        REGISTER
      </Link>
    </div>
  );
}

export default MenuBar;
