import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Login from '../components/pages/Login/Login';

export default () => (
    <Switch>
        <Route path="/">
            <Login />
        </Route>
    </Switch>
);
