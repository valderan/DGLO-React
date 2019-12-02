import React from 'react';

import './header.sass';

function Header() {
    return (
            
        <header>
            <ul className="header">
                <li className="header__item">
                    <a href="#">
                        <img src="logo/Logo.svg" alt="logo"/>
                    </a>
                </li>
                <li className="header__item">
                    <a href="#">Our coffee</a>
                </li>
                <li className="header__item">
                    <a href="#">For your pleasure</a>
                </li>
                <li className="header__item">
                    <a href="#">Contact us</a>
                </li>
            </ul>
        </header>
               
    )
};

export default Header;