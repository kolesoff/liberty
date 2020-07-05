import React from 'react';
import { NavLink } from 'react-router-dom';
import Nav from './Nav';
import { ROUTES } from '../config/routes';
import boatIcon from '../assets/icons/boat.svg';

/**
 * Компонент хедера сайта.
 */
const Header = () => {
    return (
        <header className="header">
            <div className="container">
                <NavLink
                    to={ROUTES.CONTINENT.FULL_PATH}
                    className="logo"
                >
                    <img src={boatIcon} alt="Logo" className="icon"/>
                </NavLink>
                <Nav routes={ROUTES} />
            </div>
        </header>
    );
};

export default Header;
