import * as React from 'react';
import { User } from '@firebase/auth-types';
// import auth from 'firebase/app';
import { authService } from '../firebase';

export type AuthUser = User | null;

const AuthContext = React.createContext<AuthUser>(null);

const AuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = React.useState<AuthUser>(null);
    React.useEffect(() => {
        const unsubscribe = authService.onAuthStateChanged(setUser);
        return unsubscribe;
    }, [user]);

    return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
export { AuthContext };
