import React from 'react';
import { Link } from 'react-router-dom'
import './Menu.modules.scss'

export default function Menu() {
    return (
        <ul className="menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/sobre">Sobre</Link></li>
            <li><Link to="/servicos">Serviços</Link></li>
            <li><Link to="/blog">Blog</Link></li>
            <li><Link to="/contato">Contato</Link></li>
        </ul>
    );
};
