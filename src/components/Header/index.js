import React, { Component } from 'react';
import {Person, Settings, Apps, Close, Menu} from '@material-ui/icons'; 
import Logo from '../../assets/logo-conecti.svg';
import { Link } from 'react-router-dom';


function Header() {
  function removeHide () {
    let items = document.querySelectorAll("header ul li");

    for (let i=0; i<items.length; i++) { 
      items[i].classList.remove("hide");
    }
  }
  function setHide () {
    let items = document.querySelectorAll("header ul li");

    for (let i=0; i<items.length; i++) { 
      items[i].classList.add("hide");
    }
  }
  return (
  <header>
  
    <div className="mobile-header-top">
      <Link to="/" className="logo">
          <img src={Logo} alt="Logo Conecti"/>
      </Link>

      <input type="checkbox" id="header-checkbox" class="header-checkbox"/>
      <label for="header-checkbox" class="header-toggle">
          <Menu className="menu" onClick={removeHide}/>
          <Close className="close" onClick={setHide}/>
      </label>
    
    </div>
    
    <ul className="nav">
      <li className="nav-item hide">
        Robert de Matos
      </li>
      <li className="nav-item hide">
        <Person/>
      </li>
      <li className="nav-item hide">
        <Settings/>
      </li>
      <li className="nav-item hide">
        <Apps/>
      </li>
    </ul>
    </header>
  )
}

export default Header;
