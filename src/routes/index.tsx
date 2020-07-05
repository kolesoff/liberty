import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Continent from '../pages/Continent';
import Adventure from '../pages/Adventure';
import Uncharted from '../pages/Uncharted';
import { ROUTES } from '../config/routes';

const Routes = () => (
    <Switch>
        <Route path={ROUTES.CONTINENT.FULL_PATH} exact>
            <Continent />
        </Route>
        <Route path={ROUTES.ADVENTURE.FULL_PATH}>
            <Adventure />
        </Route>
        <Route>
            <Uncharted />
        </Route>
    </Switch>
);

export default Routes;
