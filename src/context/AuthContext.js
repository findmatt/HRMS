import React, { createContext, useEffect, useState } from 'react';

import { auth } from '../firebase';

const AuthContext = createContext({ user: null });

export default function AuthProvider(props) {
    const [user, setState] = useState('');
    // eslint-disable-next-line react/prop-types
    const { children } = props;
    useEffect(() => {
        auth.onAuthStateChanged((userAuth) => {
            setState({ userAuth });
        });
        return () => console.log('cleanup');
    }, []);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
}
