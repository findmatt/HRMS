import React from 'react';
import PropTypes from 'prop-types';

function Drawer(props) {
    const { show } = props;
    const test = true;
    return (
        <div className="rounded-lg shadow bg-base-200 h-screen">
            <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
            <div className="flex flex-col items-center justify-center drawer-content">
                <label
                    htmlFor="my-drawer-2"
                    className="mb-4 btn btn-primary drawer-button lg:hidden"
                >
                    open menu
                </label>
            </div>
            {/* <div className="drawer-side">
                <label htmlFor="my-drawer-2" className="drawer-overlay ">
                    <ul className="menu p-4 overflow-y-auto w-80 bg-base-100 text-base-content h-screen">
                        <li>
                            <span>Menu Item</span>
                        </li>
                        <li>
                            <span>Menu Item</span>
                        </li>
                    </ul>
                </label>
            </div> */}
        </div>
    );
}
Drawer.propTypes = {
    show: PropTypes.bool,
};

export default Drawer;
