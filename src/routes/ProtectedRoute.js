import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';
import backgroundImg from '../background.jpg';

import firebaseAPIContext from '../context/AuthContext';
import Navbar from '../components/Container/Navbar';

function ProtectedRoute({ component: Component, ...rest }) {
    const authAPI = useContext(firebaseAPIContext);
    return (
        <Route
            {...rest}
            render={(props) =>
                authAPI.user ? (
                    <div
                        className="min-h-screen bg-cover  backdrop-blur-lg bg-opacity-50"
                        style={{
                            backgroundImage: `url(${backgroundImg})`,
                        }}
                    >
                        <Navbar>
                            <Component {...rest} {...props} />
                        </Navbar>
                    </div>
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
