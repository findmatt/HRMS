import React from 'react';
import { Switch, useLocation } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';

import './App.css';

import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import PublicRoute from './routes/PublicRoute';

import Members from './components/Pages/Members/Members';
import MemberDetails from './components/Pages/MemberDetails/MemberDetails';

function App() {
    const location = useLocation();
    const background = location.state && location.state.background;
    return (
        <div className="wrapper">
            <AuthProvider>
                <Switch location={background || location}>
                    {/* temporary landing page untill use case requires dashboard */}
                    <ProtectedRoute exact path="/" component={Members} />
                    <PublicRoute />
                </Switch>
                {background && (
                    <ProtectedRoute
                        exact
                        path="/MemberDetails/:id"
                        component={MemberDetails}
                        navBar={false}
                    />
                )}
            </AuthProvider>
            <Toaster position="bottom-center" />
        </div>
    );
}

export default App;
