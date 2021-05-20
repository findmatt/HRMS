import React, { useContext } from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../Shared/Dropdown/Dropdown';
import AuthContext from '../../context/AuthContext';

function Navbar(props) {
    const { children } = props;
    const authAPI = useContext(AuthContext);
    const menu = [
        {
            title: 'Navigate',
            menuItems: [
                {
                    icon: 'BiLogOut',
                    text: 'Dashboard',
                    linkto: '/',
                },
                {
                    icon: 'BiNews',
                    text: 'News',
                    linkto: '/',
                },
                {
                    icon: 'AiFillAlert',
                    text: 'Notifications',
                    linkto: '/',
                },
            ],
        },
        {
            title: 'Account',
            menuItems: [
                {
                    icon: 'BiLogOut',
                    text: 'Sign Out',
                    linkto: '/',
                    handleClick: authAPI.logout,
                },
            ],
        },
    ];
    return (
        <div className="lg:container lg:pt-6 mx-auto ">
            <div className="navbar mb-2 shadow-lg bg-neutral-focus text-neutral-content lg:rounded-box justify-between">
                <span className="flex-none px-2 mx-2 text-lg font-bold">
                    Grace
                </span>
                <div>
                    <Dropdown menu={menu} toggleIcon="FaBar" />
                </div>
            </div>
            {children}
        </div>
    );
}
Navbar.propTypes = {
    children: PropTypes.node,
};
export default Navbar;
