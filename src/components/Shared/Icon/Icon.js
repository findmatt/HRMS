import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlineMenu, AiFillAlert } from 'react-icons/ai';
import { BsSearch } from 'react-icons/bs';
import { BiLogOut, BiNews, BiChalkboard } from 'react-icons/bi';
import { FaCross } from 'react-icons/fa';

function Icon(props) {
    const { id } = props;
    switch (id) {
        case 'FaSearch':
            return <BsSearch className="text-xl" />;
        case 'FaBar':
            return <AiOutlineMenu className="text-xl" />;
        case 'BiLogOut':
            return <BiLogOut className="text-xl" />;
        case 'AiFillAlert':
            return <AiFillAlert className="text-xl" />;
        case 'BiNews':
            return <BiNews className="text-xl" />;
        case 'BiChalkboard':
            return <BiChalkboard className="text-xl" />;
        case 'FaCross':
            return <FaCross className="text-xl" />;
        default:
            return <span />;
    }
}
Icon.propTypes = {
    id: PropTypes.string,
};
export default Icon;
