import React from 'react';
import {BrowserRouter,  Routes, Route, Link} from 'react-router-dom';
import Header from './components/Header'
import Main from './components/Main'
import Login from './components/Login'
import SingleAnimePage from './components/SingleAnimePage'


function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/login' element={<Login />} />
        <Route path='/:mal_id' element={<SingleAnimePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
