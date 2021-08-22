/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { FirebaseAuthContext, AuthUser } from '../contexts/AuthContext';
import Navbar from '../components/Container/Navbar';

import backgroundImg from '../images/background.jpg';

type ProtectedRouteProps = {
    navBar: boolean;
    component: any;
} & RouteProps;

const ProtectedRoute: FC<ProtectedRouteProps> = ({ component: Component, navBar, ...routeProps }) => {
    const user: AuthUser = useContext(FirebaseAuthContext);
    return (
        <Route
            // eslint-disable-next-line react/jsx-props-no-spreading
            {...routeProps}
            render={() =>
                user ? (
                    <div
                        className="min-h-screen bg-cover bg-center "
                        style={{
                            backgroundImage: `url(${backgroundImg})`,
                        }}
                    >
                        <div className="lg:container lg:pt-6 pb-6 mx-auto ">
                            {navBar ? <Navbar /> : ''}
                            <Component {...routeProps} />
                        </div>
                    </div>
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    );
};

export default ProtectedRoute;
