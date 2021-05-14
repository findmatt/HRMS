import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';

function Dropdown(props) {
    const { menu, toggleIcon } = props;
    const [visible, setVisible] = useState(false);

    const handleClick = (evt) => {
        setVisible(!visible);
    };

    const dropdownRef = useRef();

    const handleClickOutside = (evt) => {
        if (dropdownRef.current && !dropdownRef.current.contains(evt.target)) {
            setVisible(false);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [visible]);

    const mapMenuGroupItems = (menuItems) =>
        menuItems.map((item) => (
            <li key={item.text} className="px-2 mx-2">
                <Link
                    to="/"
                    onClick={item.handleClick}
                    className="flex justify-left "
                >
                    <Icon id={item.icon} />
                    <div className="px-2">{item.text}</div>
                </Link>
            </li>
        ));

    const mapMenu = (menuGroups) =>
        menuGroups.map((group) => (
            <div>
                <li key={group.title} className="menu-title">
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
                <Icon id={toggleIcon} />
            </button>
            {visible && (
                <ul
                    className="menu p-4 w-max 
                            shadow-lg bg-base-100 bg-neutral-focus rounded-box 
                            text-neutral-focus
                            absolute right-0"
                >
                    {mapMenu(menu)}
                </ul>
            )}
        </div>
    );
}

Dropdown.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.object),
    toggleIcon: PropTypes.string,
};

export default Dropdown;
