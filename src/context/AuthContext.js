import React, { createContext, useEffect, useState } from 'react';
import { Redirect } from 'react-router-dom';

import { auth } from '../firebase';

const [user, setUser] = useState('');
const useFirebaseAuth = () => {
    const handleAuthResult = async (authResult) => {
        let formattedUser = null;
        if (authResult) {
            formattedUser = {
                uid: authResult.uid,
                email: authResult.email,
                name: authResult.displayName,
                provider: authResult.providerData[0].providerId,
                photoUrl: authResult.photoURL,
            };
        }
        setUser(formattedUser);
    };
    const signOut = () =>
        auth.signOut().then(() => {
            handleAuthResult(null);
            return <Redirect to="/" />;
        });
    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(handleAuthResult);

        return unsubscribe;
    }, []);

    return { user, signOut };
};

const AuthContext = createContext(user);

const AuthProvider = (props) => {
    // eslint-disable-next-line react/prop-types
    const { children } = props;
    const firebaseAuth = useFirebaseAuth();
    return (
        <AuthContext.Provider value={firebaseAuth}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider, AuthContext };
