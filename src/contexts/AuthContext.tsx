import * as React from 'react';
import { User } from '@firebase/auth-types';
// import auth from 'firebase/app';
import { authService } from '../firebase';

export type AuthUser = User | null;

const FirebaseAuthContext = React.createContext<AuthUser>(null);

const FirebaseAuthProvider: React.FC = ({ children }) => {
    const [user, setUser] = React.useState<AuthUser>(null);
    React.useEffect(() => {
        const unsubscribe = authService.onAuthStateChanged(setUser);
        return unsubscribe;
    }, []);

    return <FirebaseAuthContext.Provider value={user}>{children}</FirebaseAuthContext.Provider>;
};

export default FirebaseAuthProvider;
export { FirebaseAuthContext };
