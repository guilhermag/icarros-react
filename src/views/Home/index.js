import React, { useState } from "react";

import Nav from "@/components/Nav";
import Footer from "@/components/Footer";

import { HomeSection } from "./style";

import Card from "@/assets/cars/batmobile.png";
import { menuItem } from "@/shared/Constants";

const Home = () => {
  const [isLoad, setIsLoad] = useState(false);

  return (
    <div>
      <Nav logo={Card} item={menuItem} />
      <HomeSection>
        <h1>BatHome</h1>
        {isLoad ? (
          <>
            <p>Bruce Wayne</p>
          </>
        ) : (
          <>
            <p>Batman</p>
          </>
        )}
        <button onClick={() => setIsLoad(!isLoad)}>Click me</button>
      </HomeSection>
      <Footer />
    </div>
  );
};

export default Home;
