import React from 'react';
import { Link } from 'react-router-dom';

function Header() {

  return (
    <div className='header'>
      <Link to='.' className="title">
        AnimeList
      </Link>
    </div>
  );
}

export default Header;