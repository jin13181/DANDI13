
import './App.css';
import React from 'react';
import {Route, BrowserRouter,Routes} from 'react-router-dom';
//import AppMain from './client/view/AppMain';
import Login from './client/view/users/Login';
import Register from './client/view/users/Register'
import Home from './client/view/pages/Home';
import Map from './client/view/pages/Map';
import QR from './client/view/pages/QR';
import Stamp from './client/view/pages/Stamp';
import Mypage from './client/view/pages/Mypage';
import Header from './client/view/components/Header';




function App() {

  return (
    <div id="app">
       <BrowserRouter>
       <Header/>
        <Routes>
         <Route path='/' element={<Login/>} />
         <Route path='/register' element={<Register/>} />
         <Route path='/home' element={<Home/>} />
          <Route path='/map' element={<Map/>} />
          <Route path='/qr' element={<QR/>} />
          <Route path='/stamp' element={<Stamp/>} />
          <Route path='/mypage' element={<Mypage/>} />
        </Routes>
       </BrowserRouter>
      </div>
  )
}

export default App;
