import React, { useContext } from 'react';
import { Redirect, Route } from 'react-router-dom';
import PropTypes from 'prop-types';

import firebaseAPIContext from '../context/AuthContext';
import Navbar from '../components/Container/Navbar';

import backgroundImg from '../background.jpg';

function ProtectedRoute({ component: Component, navBar, ...rest }) {
    const authAPI = useContext(firebaseAPIContext);
    return (
        <Route
            {...rest}
            render={() =>
                authAPI.user ? (
                    <div
                        className="min-h-screen bg-cover bg-center "
                        style={{
                            backgroundImage: `url(${backgroundImg})`,
                        }}
                    >
                        <div className="lg:container lg:pt-6 pb-6 mx-auto ">
                            {navBar ? <Navbar /> : ''}
                            <Component />
                        </div>
                    </div>
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
}

ProtectedRoute.propTypes = {
    component: PropTypes.func,
    navBar: PropTypes.bool,
};

ProtectedRoute.defaultProps = {
    navBar: true,
};

export default ProtectedRoute;
