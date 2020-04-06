import React from 'react';
import {NavLink} from 'react-router-dom';

const Header = () => (
    <header>
        <span className="icn-logo"><i className="fas fa-money-bill-alt material-icons">SB</i></span>
        <ul className="main-nav">
            <li><NavLink exact to="/">Home</NavLink></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/teachers">Employees</NavLink></li>
            <li><NavLink to="/courses">Departments</NavLink></li>
        </ul>
    </header>
);

export default Header;