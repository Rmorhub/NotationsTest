import React from 'react';
import './index.scss';

import { Link } from 'react-router-dom';

const Header = () => (
  <header className="header">
    <nav className="header__nav">
      <Link to="/" className="link__btn">
        <button className="header__nav_link">Notations</button>
      </Link>
      <Link to="/create-notation" className="link__btn">
        <button className="header__nav_link">Create notation</button>
      </Link>
    </nav>
  </header>
);
export default Header;
