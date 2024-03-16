import React from "react";
import NavBar from "../NavBar/NavBar";
import './Header.css';
import logo from '../../images/ippon_gym_logo_2021.png';

function Header() {
    return (
        <header className="header-container">
            <div className="header-sub-container">
            <div className="header-logo-container">
                <img className="logo-image" src={logo} alt="Logo" />
                <div className="header-menu-items">
                    <a href="https://goo.gl/maps/jxFrPQFzQN6fyw7e6" rel="noopener">
                        <span>FIND</span>
                        <i className="fa-map-marker-alt"></i>
                    </a>
                    <a>Call</a>
                    <a>Email</a>
                    <a>Insta</a>
                    <a>Face</a>
                    <a>Twitter</a>
                </div>
                </div>
                <div className="navbar-container">
                    <NavBar/>
                </div>
            </div>
        </header>
    );
}

export default Header;