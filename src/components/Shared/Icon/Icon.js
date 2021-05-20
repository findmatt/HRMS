import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineMenu, AiFillAlert } from 'react-icons/ai';
import { SiGooglemaps } from 'react-icons/si';
import { BsSearch } from 'react-icons/bs';
import { BiLogOut, BiNews, BiChalkboard } from 'react-icons/bi';
import { FaCross } from 'react-icons/fa';
import { TiPhoneOutline } from 'react-icons/ti';

function Icon(props) {
    const { id, textSize } = props;
    const iconSize = textSize || 'text-base';
    switch (id) {
        case 'FaSearch':
            return <BsSearch className={iconSize} />;
        case 'FaBar':
            return <AiOutlineMenu className={iconSize} />;
        case 'BiLogOut':
            return <BiLogOut className={iconSize} />;
        case 'AiFillAlert':
            return <AiFillAlert className={iconSize} />;
        case 'BiNews':
            return <BiNews className={iconSize} />;
        case 'BiChalkboard':
            return <BiChalkboard className={iconSize} />;
        case 'FaCross':
            return <FaCross className={iconSize} />;
        case 'SiGooglemaps':
            return <SiGooglemaps className={iconSize} />;
        case 'TiPhoneOutline':
            return <TiPhoneOutline className={iconSize} />;
        default:
            return <span />;
    }
}
Icon.propTypes = {
    id: PropTypes.string,
    textSize: PropTypes.string,
};
export default Icon;
