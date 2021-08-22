import React, { useEffect, useState, useRef, FC } from 'react';
import { Link } from 'react-router-dom';

import Icon from '../Icon/Icon';

export type MenuItem = {
    text: string;
    linkto: string;
    handleClick?: () => void;
    icon: string;
};

export type MenuGroup = {
    title: string;
    menuItems: MenuItem[];
};

type Props = {
    menu: MenuGroup[];
    toggleIcon: string;
};

const Dropdown: FC<Props> = ({ menu, toggleIcon }) => {
    const [visible, setVisible] = useState(false);

    const handleClick = () => {
        setVisible(!visible);
    };

    const dropdownRef = useRef<HTMLDivElement>(null);

    const handleClickOutside = (evt?: MouseEvent) => {
        if (!dropdownRef?.current?.contains(evt?.target as Node)) {
            setVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [visible]);

    const mapMenuGroupItems = (menuItems: MenuItem[]) =>
        menuItems.map((item: MenuItem) => (
            <li key={item.text} className="px-2 mx-2">
                <Link
                    to={item.linkto}
                    onClick={item.handleClick}
                    className="flex justify-left "
                >
                    <Icon id={item.icon} textSize="text-xl" />
                    <div className="px-2">{item.text}</div>
                </Link>
            </li>
        ));

    const mapMenu = (menuGroups: MenuGroup[]) =>
        menuGroups.map((group: MenuGroup) => (
            <div key={group.title}>
                <li className="menu-title">
                    <span>{group.title}</span>
                </li>
                {mapMenuGroupItems(group.menuItems)}
            </div>
        ));

    return (
        <div ref={dropdownRef} className="relative z-20">
            <button
                type="button"
                className="btn btn-ghost rounded-btn text-neutral-content"
                onClick={handleClick}
            >
                <Icon id={toggleIcon} textSize="text-xl" />
            </button>
            {visible && (
                <ul
                    className="menu p-4 w-max 
                            shadow-lg bg-base-100  rounded-box 
                            text-neutral-focus
                            absolute right-0"
                >
                    {mapMenu(menu)}
                </ul>
            )}
        </div>
    );
};
export default Dropdown;
