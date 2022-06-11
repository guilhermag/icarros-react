import React from "react";

import Nav from "@/components/Nav";

import Card from "@/assets/cars/batmobile.png";
import { menuItem } from "@/shared/Constants";

const Err = () => {
  return (
    <div>
      <Nav logo={Card} item={menuItem} />
      <h1>Página não encontrada</h1>
    </div>
  );
};

export default Err;
