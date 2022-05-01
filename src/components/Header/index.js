import React, { Component } from 'react';
import {Person, Settings, Apps} from '@material-ui/icons'; 
import Logo from '../../assets/logo-conecti.svg';
import { Link } from 'react-router-dom';


function Header() {
  return (
      <header>
        <Link to="/">
            <img src={Logo} alt="Logo Conecti"/>
        </Link>

        <ul className="nav">
            <li>Robert de Matos</li>
            <li>
                <Person/>
            </li>
            <li>
              <Settings/>
            </li>
            <li>
              <Apps/>
            </li>
        </ul>
      </header>
      
  )
}

export default Header;
