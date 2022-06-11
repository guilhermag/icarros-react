import React, { useState } from "react";

import { Link } from "react-router-dom";

import Button from "@/components/Button";
import Nav from "@/components/Nav";

import Card from "@/assets/cars/batmobile.png";
import { menuItem } from "@/shared/Constants";

const Dash = () => {
  const [load, setIsLoad] = useState(false);
  return (
    <>
      <Nav logo={Card} item={menuItem} />
      <h1>BatPainel</h1>
      <Link to="/">Clique aqui para retornar a Home</Link>
      <Button label="Clique aqui" action={() => setIsLoad(!load)} type="danger" isDisable={load}/>
    </>
  );
};

export default Dash;
