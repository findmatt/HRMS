import React, { useContext } from 'react';
import firebaseAPIContext from '../../../context/AuthContext';

export default function Members() {
    const { logout } = useContext(firebaseAPIContext);
    const handleLogout = () => {
        logout();
    };

    return (
        <div className="card-body">
            {/* <span>test</span>
            <form>
                <button type="button" onClick={handleLogout}>
                    Logout
                </button>
            </form> */}
        </div>
    );
}
