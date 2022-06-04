import React, { useState, useCallback } from 'react';
import { toast } from 'react-toastify';
import Lottie from 'lottie-react-web';
import { useNavigate } from 'react-router-dom';

import { api } from '@/services/api';

import batman from '@/animation/batman.json'

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

import { FormContainer, ContactCard } from './style';

const Contact = () => {
  const navigate = useNavigate();

  const [ data, setData ] = useState();
  const [ isSending, setIsSendind ] = useState(false);

  const sendData = useCallback((e) => {
    e.preventDefault();
    setIsSendind(true);
    api.post('', data)
      .then(() => {
        toast.success('Mensagem enviada com sucesso', {
          type: 'success',
          onClose: () => {
            navigate('/');
          }
        })})
      .catch(() => toast.error('ERRO', {
        type: 'error'
      })).finally(() => {
        setIsSendind(false);
      })
  }, [data]);
  return (
    <div>
      <Nav />
      <FormContainer>
        <h1>BatContato</h1>
        <ContactCard>
          <form onSubmit={sendData}>
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
              {
                !isSending ? (
                  <>
                    <input type="submit" value="Enviar" />
                  </>
                ) : (
                  <>
                    <Lottie options={{animationData: batman}} />
                  </>
                )
              }
          </form>
        </ContactCard>
      </FormContainer>
      <Footer />
    </div>
  )
}

export default Contact