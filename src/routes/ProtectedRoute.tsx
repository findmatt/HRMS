/* eslint-disable react/jsx-props-no-spreading */
import React, { useContext, FC } from 'react';
import { Redirect, Route, RouteProps } from 'react-router-dom';

import { AuthContext, AuthUser } from '../contexts/AuthProvider';
import Navbar from '../components/Container/Navbar';

import backgroundImg from '../assets/background.jpg';

type ProtectedRouteProps = {
    navBar: boolean;
    component: FC;
} & RouteProps;

const ProtectedRoute: FC<ProtectedRouteProps> = ({ component: Component, navBar, ...routeProps }) => {
    const user: AuthUser = useContext(AuthContext);
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
                    <Redirect to="/" />
                )
            }
        />
    );
};

export default ProtectedRoute;
