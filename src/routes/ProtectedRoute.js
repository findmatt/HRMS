import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import firebaseAPIContext from '../context/AuthContext';
import Navbar from '../components/Navbar/Navbar';

function ProtectedRoute({ component: Component, ...rest }) {
    const authAPI = useContext(firebaseAPIContext);
    return (
        <Route
            {...rest}
            render={(props) =>
                authAPI.user ? (
                    <Navbar>
                        <Component {...rest} {...props} />
                    </Navbar>
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
}

ProtectedRoute.propTypes = {
    component: PropTypes.node,
};

export default ProtectedRoute;
