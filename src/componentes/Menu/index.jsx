import React from 'react';
import { Link } from 'react-router-dom'
import'./Menu.modules.scss'

export default function Menu() {
    return (
        <ul className="menu">
            <li><Link to="/" className='link-menu'>Home</Link></li>
            <li><Link to="/sobre" className='link-menu'>Sobre</Link></li>
            <li><Link to="/servicos" className='link-menu'>Serviços</Link></li>
            <li><Link to="/blog" className='link-menu'>Blog</Link></li>
            <li><Link to="/contato" className='link-menu'>Contato</Link></li>
        </ul>
    );
};
