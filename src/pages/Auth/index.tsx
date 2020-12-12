import React from 'react';
import { Route, Switch } from 'react-router-dom';

import { Login } from './Login';
import { Registration } from './Registration';

export const Auth = () => {
    return (
        <>
            <Switch>
                <Route exact path={['/', '/login']} component={Login} />
                <Route path='/registration' component={Registration} />
            </Switch>
        </>
    );
};