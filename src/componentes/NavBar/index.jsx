import React from 'react'
import styles from './NavBar.modules.scss'
import { Link } from 'react-router-dom'

import logo from 'assets/logo/logoOrofacial.png'
import Menu from 'componentes/Menu';

export default function NavBar() {
  return (
    <nav className="navBar">
      <div className="logo">
        <Link to="/" className="logo__img">
          <img src={logo} alt="Logo" />
        </Link>
        <Link to="/" className="logo__name">
          <h2>Orofacial Studio</h2>
        </Link>
      </div>
      <Menu />
      <div>
        <Link to='/'>
          <h4>Canal do Youtube</h4>
        </Link>
      </div>
    </nav>
  );
};