import React, { useContext, FC } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Login from '../components/Pages/Login';
import { AuthContext } from '../contexts/AuthProvider';

const PublicRoute: FC = () => {
    const user = useContext(AuthContext);
    if (user) {
        return <Redirect to="/members" />;
    }
    return <Route exact path="/" component={Login} />;
};

export default PublicRoute;
