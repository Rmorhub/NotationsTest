import React from 'react';
import './index.scss';

import { Link } from 'react-router-dom';

import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';

const Header = () => (
  <header className="header">
    <nav className="header__nav">
      <Stack spacing={2} direction="row" margin="0 50px">
        <Link to="/" className="link__btn">
          <Button variant="contained">Notations</Button>
        </Link>
        <Link to="/create-notation" className="link__btn">
          <Button variant="contained">Create notation</Button>
        </Link>
      </Stack>
    </nav>
  </header>
);
export default Header;
