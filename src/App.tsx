import React, { FC } from 'react';
import { Switch, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { Location } from 'history';

import './App.css';

import AuthProvider from './contexts/AuthProvider';
import ProtectedRoute from './routes/ProtectedRoute';
import PublicRoute from './routes/PublicRoute';

import Members from './components/Pages/Members';
import MemberDetails from './components/Pages/Members/MemberDetails';
import { Member } from './components/Pages/Members/types';

type LocationState = {
    background: Location;
    member: Member;
};

const App: FC = () => {
    const location = useLocation();
    const { state } = useLocation<LocationState>();
    const background = state && state.background;
    return (
        <div className="wrapper">
            <AuthProvider>
                <Switch location={background || location}>
                    {/* temporary landing page untill use case requires dashboard */}
                    <ProtectedRoute exact path="/members" component={Members} navBar />
                    <PublicRoute />
                </Switch>
                {background && (
                    <ProtectedRoute exact path="/MemberDetails/:id" component={MemberDetails} navBar={false} />
                )}
            </AuthProvider>
            <Toaster
                position="bottom-center"
                containerStyle={{
                    top: 20,
                    left: 20,
                    bottom: '15%',
                    right: 20,
                }}
            />
        </div>
    );
};

export default App;
