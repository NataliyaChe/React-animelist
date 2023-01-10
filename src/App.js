import React from 'react';
import {BrowserRouter,  Routes, Route, Link} from 'react-router-dom';
import Header from './components/Header'
import Main from './components/Main'
import Login from './components/Login'


function App() {
  return (
    <BrowserRouter>
      {/* <div className='navbar'>
        <div className='navbar-links'>
          <a href='/login'>Login</a>
          <a href='/main'>Main</a>
        </div>
      </div> */}
      <Header />
      <Routes>
        <Route path='/' element={<Main />} />
        {/* <Route path='/' element={<Login />} /> */}
        
        
      </Routes>
      Main page
    </BrowserRouter>
  );
}

export default App;
