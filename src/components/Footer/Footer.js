import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-5 offset-lg-4">
                        <ul className="footer">
                            <li className="footer__item">
                                <Link to="/">
                                    <img src="logo/Logo_black.svg" alt="logo"/>
                                </Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/ourcoffee">Our coffee</Link>
                            </li>
                            <li className="footer__item">
                                <Link to="/pleasure">For your pleasure</Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <img className="beanslogo" src="logo/Beans_logo_dark.svg" alt="Beans logo"/>
            </div>
        </footer>   
    )
}

export default Footer;