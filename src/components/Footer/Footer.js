import React from 'react';
import { Link } from 'react-router-dom';
import logo_black  from '../Footer/img/Logo_black.svg';
import beans_logo_dark  from '../Footer/img/Beans_logo_dark.svg';

import './footer.sass';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 offset-lg-3">
                        <ul className="footer">
                            <li className="footer__item">
                                <Link to="/">
                                    <img src={logo_black} alt="logo"/>
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/ourcoffee">Our coffee</Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/pleasure">For your pleasure</Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/contact">Contact us</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <img className="beanslogo" src={beans_logo_dark} alt="Beans logo"/>
            </div>
        </footer>   
    )
}

export default Footer;