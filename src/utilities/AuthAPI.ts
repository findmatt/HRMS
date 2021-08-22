import toast from 'react-hot-toast';

import { authService } from '../firebase';

const login = (email: string, password: string): void => {
    authService.signInWithEmailAndPassword(email, password).catch((err) => {
        toast.error(err.message);
    });
};
const logout = (): void => {
    authService.signOut().catch((err) => {
        toast.error(err.message);
    });
};
export default { login, logout };
