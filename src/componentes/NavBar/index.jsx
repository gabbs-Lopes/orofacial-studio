import React from "react";
import './NavBar.modules.scss'

import logo from 'assets/logo/logoOrofacial.png'
import { Link } from "react-router-dom";
import Menu from "componentes/Menu";

export default function NavBar() {
    return (
        <nav className="NavBar">
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
                <Link target="_blank" to='https://www.youtube.com/results?search_query=orofacial+studio'>
                    <h4>Canal do Youtube</h4>
                </Link>
            </div>
        </nav>
    )
};