import React from 'react';

import { FooterContent, FooterButton } from './style'

const Footer = () => {
  return (
    <FooterContent>
      <FooterButton bgColor="red" colorText="white">
        Texto do botão      
      </FooterButton>
      <p>BatRodapé</p>
    </FooterContent>
  )
}

export default Footer