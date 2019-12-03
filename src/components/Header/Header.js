import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../Header/logo/Logo.svg';

import './header.sass';

function Header() {
    return (
            
        <header>
            <ul className="header">
                <li className="header__item">
                    <Link to="/">
                        <img src={logo} alt="logo"/>
                    </Link>
                </li>
                <li className="header__item">
                    <Link to="/ourcoffee"> 
                        Our coffee
                    </Link>
                </li>
                <li className="header__item">
                    <Link to="/pleasure"> 
                        For your pleasure
                    </Link>
                </li>
                <li className="header__item">
                    <Link to="/contact"> 
                        Contact us
                    </Link>
                </li>
            </ul>
        </header>
               
    )
};

export default Header;