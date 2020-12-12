import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Auth } from './pages/Auth';
import { Home } from './pages/app/Home';

export const App = () => (
    <>
        <Switch>
            <Route exact path={['/', '/login', 'registration']} component={Auth} />
            <Route path='/@me' component={Home} />
        </Switch>
    </>
);
