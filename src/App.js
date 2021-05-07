import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';

import { AuthProvider } from './context/AuthContext';
import ProtectedRoute from './routes/ProtectedRoute';
import PublicRoute from './routes/PublicRoute';

import Members from './components/pages/Members/Members';
import Drawer from './components/Drawer/Drawer';

function App() {
    // eslint-disable-next-line no-unused-vars
    return (
        <div className="wrapper">
            <BrowserRouter>
                <AuthProvider>
                    <Switch>
                        {/* temporary landing page untill use case requires dashboard */}
                        <ProtectedRoute exact path="/" component={Members} />
                        <PublicRoute />
                    </Switch>
                </AuthProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
