import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menu.scss';


const Menu = () => {
  return (
    <div className="Menu">

    <ul>
        <li><NavLink  to='/'> Home </NavLink></li>
        <li><NavLink  > About </NavLink></li>
        <li><NavLink to='/shop'> Shop </NavLink></li>
        <li><NavLink > Contact </NavLink></li>
    </ul>

  </div>
  )
}

export default Menu;