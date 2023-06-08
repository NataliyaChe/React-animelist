import React from 'react';
import {Link} from 'react-router-dom';

function Header() {
  return (
    <div className='navbar'>
      <div className='navbar__links'>
        <Link to='.'>Main</Link>
        <Link to='./login'>Login</Link>
      </div>
    </div>
  );
}

export default Header;