import React from 'react';
import PropTypes from 'prop-types';

function Navbar(props) {
    const { children } = props;
    return (
        <div className="lg:container lg:pt-6 mx-auto ">
            <div className="navbar mb-2 shadow-lg bg-neutral text-neutral-content lg:rounded-box ">
                <button type="button" className="btn btn-square btn-ghost">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        className="inline-block w-6 h-6 stroke-current"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M4 6h16M4 12h16M4 18h16"
                        />
                    </svg>
                </button>
                <div className="flex-1 ">
                    <span className="text-lg font-bold">Grace Church</span>
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
