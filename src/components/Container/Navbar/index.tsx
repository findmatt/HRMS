import React, { FC } from 'react';
import AuthAPI from '../../../utilities/AuthAPI';

import Dropdown, { MenuGroup } from '../../Reusable/Dropdown';

const Navbar: FC = () => {
    const menu: MenuGroup[] = [
        {
            title: 'Navigate',
            menuItems: [
                {
                    icon: 'BiLogOut',
                    text: 'Dashboard',
                    linkto: '/members',
                },
                {
                    icon: 'BiNews',
                    text: 'News',
                    linkto: '/members',
                },
                {
                    icon: 'AiFillAlert',
                    text: 'Notifications',
                    linkto: '/members',
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
                    handleClick: AuthAPI.logout,
                },
            ],
        },
    ];
    return (
        <div className="navbar sticky top-0 z-10 mb-2 shadow-lg bg-neutral-focus text-neutral-content lg:rounded-box justify-between">
            <span className="flex-none px-2 mx-2 text-lg font-bold">Grace</span>
            <div>
                <Dropdown menu={menu} toggleIcon="FaBar" />
            </div>
        </div>
    );
};
export default Navbar;
