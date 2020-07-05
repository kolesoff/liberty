import React from 'react';
import { NavLink } from 'react-router-dom';
import { IRoutes, ROUTES } from '../config/routes';

/**
 * @prop routes Список роутов.
 */
interface IProps {
    routes: IRoutes;
}

/**
 * Компонент навигации.
 * @param props Пропсы компонента.
 */
const Nav = (props: IProps) => {
    const {routes} = props;
    return (
        <nav className="nav">
            {Object.keys(routes).map(item => {
                const {FULL_PATH, LABEL} = routes[item];
                return (
                    <NavLink
                        key={FULL_PATH}
                        to={FULL_PATH}
                        className="nav-item"
                        activeClassName="active"
                        exact={FULL_PATH === ROUTES.CONTINENT.FULL_PATH}
                    >
                        {LABEL}
                    </NavLink>
                );
            })}
        </nav>
    );
};

export default Nav;
