import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Login, Registration } from './pages/auth';

export const App = () => (
    <>
        <Switch>
            <Route exact path={['/', '/login']} component={Login} />
            <Route path='/registration' component={Registration} />
        </Switch>
    </>
);
