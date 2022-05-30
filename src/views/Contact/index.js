import React, { useState } from 'react';

import { api } from '@/services/api';

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

import { FormContainer, ContactCard } from './style';

const Contact = () => {
  const [ data, setData ] = useState();
  return (
    <div>
      <Nav />
      <FormContainer>
        <h1>Contact</h1>
        <ContactCard>
          <form action="">
            <input 
              type="text" 
              placeholder='Informe seu nome'
              onChange={e => setData({...data, name: e.target.value})}
            />
            <input 
              type="text" 
              placeholder='Informe seu email'
              onChange={e => setData({...data, email: e.target.value})}
            />
            <input 
              type="text" 
              placeholder='Informe seu telefone'
              onChange={e => setData({...data, phone: e.target.value})}
              />
            <input type="submit" value="Enviar" />
          </form>
        </ContactCard>
      </FormContainer>
      <Footer />
    </div>
  )
}

export default Contact