import React from 'react';
import { Link } from 'react-router-dom';

import { NavContent } from './style';

import Card from '@/assets/cars/batmobile.png'

const Nav = () => {
  return (
    <NavContent>
      <div className="container">
        <img src={Card} alt="foto batmobile" width={200} height={'auto'}/>
        <Link to="/">BatHome</Link>
        <Link to="/contato">BatContato</Link>
        <Link to="/login">BatLogin</Link>
      </div>
    </NavContent>
  )
}

export default Nav;