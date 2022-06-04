import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import PrivateRoute from './private.route';

import Home from '@/views/Home';
import Contact from '@/views/Contact';
import Login from '@/views/Login';
import Err from '@/views/Erro';
import Dash from '@/views/Dash';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='*' element={<Err />}/>
        <Route path='/' element={<Home />}/>
        <Route path='/contato' element={<Contact />}/>
        <Route path='/Login' element={<Login />}/>
        <Route path='/dash' element={
          <PrivateRoute>
            <Dash />
          </PrivateRoute>
        }
        />
      </Routes>
    </BrowserRouter>
  )
}

export default Router;