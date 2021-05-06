import React from 'react';
import { AuthContext } from '../../../context/AuthContext';

export default function Members() {
    const handleLogout = () => {
        const { signOut } = AuthContext;
        signOut();
    };

    return (
        <div className="card-body">
            <span>test</span>
            <form>
                <button type="button" onClick={handleLogout}>
                    Logout
                </button>
            </form>
        </div>
    );
}
