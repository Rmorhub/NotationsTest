import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import Header from './components/header/Header';
import Main from './components/main/Main';

const App = () => (
  <BrowserRouter>
    <Header />
    <Main />
  </BrowserRouter>
);

export default App;
