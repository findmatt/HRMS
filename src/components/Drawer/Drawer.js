import React from 'react';
import PropTypes from 'prop-types';

function Drawer(props) {
    const { show } = props;
    const test = true;
    return <div />;
}
Drawer.propTypes = {
    show: PropTypes.bool,
};

export default Drawer;
