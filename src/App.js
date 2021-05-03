import React, { useState } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import Login from './components/pages/Login/Login';

function App() {
    // const [token, setToken] = useState();
    const [auth, setAuth] = useState();
    if (!auth) {
        return <Login setAuth={setAuth} />;
    }
    return (
        <div className="wrapper">
            <h1>Application</h1>
            <BrowserRouter>
                <Switch>
                    <Route path="/login">
                        <Login />
                    </Route>
                </Switch>
            </BrowserRouter>
        </div>
    );
}

export default App;
