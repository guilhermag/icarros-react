import React, { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

import { authAPI } from '@/services/api'

import { Container } from './style';

const Login = () => {
  const navigate = useNavigate();
  const [data, setData] = useState();
  const submitLogin = e => {
    e.preventDefault();
    authAPI.post('session', data)
    .then( res => {
      const { token } = res.data;
      localStorage.setItem('@iCarrosToken', token)
      toast('Seja bem vindo patrão Bruce', {
        type: 'success',
        onClose: () => navigate('/dash')
      })
    } )
    .catch(() => {
      toast('Você não é o patrão Bruce', {
        type: 'error',
      })
    })
    .finally()
    ;
  }
  return (
    <div>
      <Nav />
      <Container>
        <h1>BatLogin</h1>
        <form onSubmit={submitLogin}>
          <input type="email"
          placeholder="BatUsuário"
          onChange={ e => setData({ ...data, email: e.target.value })}
          />
          <input type="password"
          placeholder="BatSenha"
          onChange={ e => setData({ ...data, password: e.target.value })}
          />
          <input type="submit" value="BatLogar"/>
        </form>
      </Container>
      <Footer />
    </div>
  );
};

export default Login;
