import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './App.css';
import UserProvider from './context/AuthContext';
import Login from './components/pages/Login/Login';
// import Members from './components/pages/Members/Members';

function App() {
    return (
        <div className="wrapper">
            <BrowserRouter>
                <UserProvider>
                    <Switch>
                        <Route path="/login">
                            <Login />
                        </Route>
                        {/* <Route path="/members">
                        <Members />
                    </Route> */}
                    </Switch>
                </UserProvider>
            </BrowserRouter>
        </div>
    );
}

export const AuthContext = React.createContext();

export default App;
