import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';

import Login from '../components/pages/Login/Login';
import firebaseAPIContext from '../context/AuthContext';

export default () => {
    const authAPI = useContext(firebaseAPIContext);
    if (authAPI.user) {
        return <Redirect to="/" />;
    }
    return <Route exact path="/login" component={Login} />;
};
