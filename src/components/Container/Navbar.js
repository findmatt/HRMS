import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';

import Dropdown from '../Shared/Dropdown/Dropdown';
import Icon from '../Shared/Icon/Icon';
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
                    onClick: authAPI.logout,
                },
            ],
        },
    ];
    return (
        <div className="lg:container lg:pt-6 mx-auto">
            <div className="navbar mb-2 shadow-lg bg-neutral-focus lg:rounded-box flex flex-1 justify-between ">
                <div className="justify-left flex-initial px-2 mx-auto text-neutral-content">
                    <span className="px-2 mx-2 text-lg font-bold">
                        <Icon id="FaCross" className="align-middle" />
                    </span>
                    <span className="px-2 mx-2 text-lg font-bold ">
                        Grace Church
                    </span>
                </div>
                <form className="justify-center flex-grow flex-1 px-2 mx-auto text-neutral-content">
                    <div className="form-control flex-grow">
                        <input
                            type="text"
                            placeholder="Search Members"
                            className="input input-ghost"
                        />
                    </div>
                    <button type="button" className="btn btn-square btn-ghost">
                        <Icon id="FaSearch" />
                    </button>
                </form>
                <div className="justify-end flex-1 px-2  ">
                    <div className="relative">
                        <Dropdown menu={menu} />
                    </div>
                </div>
            </div>
            {/* <Drawer show="True" /> */}
            {children}
        </div>
    );
}
Navbar.propTypes = {
    children: PropTypes.node,
};
export default Navbar;
