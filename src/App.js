import React, { useContext } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';

import { AuthContext, AuthProvider } from './context/AuthContext';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

function App() {
    // eslint-disable-next-line no-unused-vars
    const { user, signOut } = useContext(AuthContext);
    return (
        <div className="wrapper">
            <BrowserRouter>
                <AuthProvider>
                    {user ? <PrivateRoute /> : <PublicRoute />}
                </AuthProvider>
            </BrowserRouter>
        </div>
    );
}

export default App;
