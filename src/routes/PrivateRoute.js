import React, { useContext } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

import Members from '../components/pages/Members/Members';
import { AuthContext } from '../context/AuthContext';

export default () => {
    const { user } = useContext(AuthContext);

    return (
        <Switch>
            <Route path="/members" />
            {!user ? <Redirect to="/" /> : <Members />}
        </Switch>
    );
};
