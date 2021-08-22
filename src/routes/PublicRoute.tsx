import React, { useContext, FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Login from '../components/Pages/Login/Login';
import { FirebaseAuthContext } from '../contexts/AuthContext';

const PublicRoute: FC = () => {
    const user = useContext(FirebaseAuthContext);
    if (user) {
        return <Redirect to="/" />;
    }
    return <Route exact path="/login" component={Login} />;
};

export default PublicRoute;
