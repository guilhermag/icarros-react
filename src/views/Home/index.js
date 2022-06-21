import React, { useState, useEffect } from 'react';

import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

import { MainContent, Container } from './style';

import Card from '@/assets/cars/batmobile.png';
import Image1 from '@/assets/cars/batmobile2.png';
import Image2 from '@/assets/cars/batmobile3.png';
import Image3 from '@/assets/cars/batkid.png';

import { menuItem } from '@/shared/Constants';

import TextComponent from '../../components/TextComponent';
import ImageComponent from '../../components/ImageComponent';

const Home = () => {
  const [isLoad, setIsLoad] = useState(false);

  return (
    <>
      <Nav logo={Card} item={menuItem} />
      <MainContent>
        <h1>BatHome</h1>
        <Container>
          <TextComponent
            title="BatCard1"
            text="Hero can be anyone. Even a man knowing something as simple and reassuring as putting a coat around a young boy shoulders to let him know the world hadn't ended. Well, you see... I'm buying this hotel and setting some new rules about the pool area.
            Accomplice? I'm gonna tell them the whole thing was your idea. Does it come in black? Accomplice? I'm gonna tell them the whole thing was your idea. Someone like you. Someone who'll rattle the cages."
          />
          <ImageComponent imageLink={Image1} altText="teste" />
        </Container>
        <Container>
          <ImageComponent imageLink={Image2} altText="teste" />
          <TextComponent
            title="BatCard2"
            text=" It's not who I am underneath but what I do that defines me. The first time I stole so that I wouldn't starve, yes. I lost many assumptions about the simple nature of right and wrong. And when I traveled I learned the fear before a crime and the thrill of success. But I never became one of them.
            Well, you see... I'm buying this hotel and setting some new rules about the pool area. No guns, no killing. Bats frighten me. It's time my enemies shared my dread. It's not who I am underneath but what I do that defines me."
          />
        </Container>
        <Container>
          <TextComponent
            title="Batcar3"
            text=" It's not who I am underneath but what I do that defines me. It's not who I am underneath but what I do that defines me. Someone like you. Someone who'll rattle the cages.
            I'm not wearing hockey pads. Someone like you. Someone who'll rattle the cages. Accomplice? I'm gonna tell them the whole thing was your idea."
          />
          <ImageComponent imageLink={Image3} altText="teste" />
        </Container>
      </MainContent>
      <Footer />
    </>
  );
};

export default Home;
