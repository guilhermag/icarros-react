import React, { useState } from 'react';

import Nav from '@/components/Nav'
import Footer from '@/components/Footer'

import { HomeSection } from './style';

const Home = () => {

  const [ isLoad, setIsLoad ] = useState(false);
  const clickMe = () => alert("Clicked");

  return (
    <div>
      <Nav />
      <HomeSection>
        <h1>Página de Home</h1>
        {
          isLoad ? (
          <>
            <p>Carregando</p>
          </>
        ) : (
          <>
            <p>Pronto</p>
          </>
        )
        }
        <button onClick={ () => setIsLoad(!isLoad) }>Click me</button>
      </HomeSection>
      <Footer />
    </div>
  )
}

export default Home