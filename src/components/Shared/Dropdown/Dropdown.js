import React, { useEffect, useState, useRef } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Icon from '../Icon/Icon';

function Dropdown(props) {
    const { menu } = props;
    const [isVisible, setIsVisible] = useState(false);
    const dropdownRef = useRef();

    const handleClickOutside = (event) => {
        if (
            dropdownRef.current &&
            !dropdownRef.current.contains(event.target)
        ) {
            setIsVisible(!isVisible);
        }
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, []);
    return (
        <div className="relative">
            <button
                type="button"
                className="btn btn-ghost rounded-btn text-neutral-content"
                onClick={() => setIsVisible(!isVisible)}
            >
                <Icon id="FaBar" />
            </button>
            {isVisible && (
                <ul
                    ref={dropdownRef}
                    className="menu p-4 shadow-lg bg-base-100 bg-neutral-focus rounded-box absolute w-max float-none right-0 z-2"
                >
                    {menu.map((menuGroup, i) => {
                        const groupKey = i;
                        return (
                            <div key={groupKey}>
                                <li key={groupKey} className="menu-title">
                                    <span>{menuGroup.title}</span>
                                </li>
                                {menuGroup.menuItems.map((item, j) => {
                                    const optionKey = `${groupKey}${j}`;
                                    return (
                                        <li key={optionKey}>
                                            <Link
                                                to="/"
                                                onClick={item.handleClick}
                                                className="flex justify-left"
                                            >
                                                <Icon id={item.icon} />
                                                <div className="px-2">
                                                    {item.text}
                                                </div>
                                            </Link>
                                        </li>
                                    );
                                })}
                            </div>
                        );
                    })}
                </ul>
            )}
        </div>
    );
}

Dropdown.propTypes = {
    menu: PropTypes.arrayOf(PropTypes.object),
};

export default Dropdown;
