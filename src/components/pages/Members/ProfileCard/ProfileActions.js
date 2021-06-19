import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../Shared/Icon/Icon';

const ProfileActions = ({ phoneToCall, postalCode }) => (
    <div className="flex flex-row items-center justify-center space-x-4 text-primary ">
        <a
            href={
                postalCode
                    ? `http://maps.google.com/?saddr=Current+Location&daddr=Singapore+${postalCode}`
                    : ''
            }
        >
            <button
                type="button"
                className="btn bg-gradient-to-br from-base-100 to-base-300 btn-ghost border-0 neumorph hover:text-base-content hover:transform hover:scale-110"
                target="_blank"
                disabled={!postalCode}
                rel="noreferrer"
            >
                <Icon id="SiGooglemaps" />
            </button>
        </a>
        <a href={`tel:${phoneToCall}`}>
            <button
                type="button"
                className="btn  bg-gradient-to-br from-base-100 to-base-300 btn-ghost border-0 neumorph hover:text-base-content hover:transform hover:scale-110 "
                disabled={phoneToCall === ''}
            >
                <Icon id="TiPhoneOutline" />
            </button>
        </a>
    </div>
);

ProfileActions.propTypes = {
    postalCode: PropTypes.oneOfType([PropTypes.string]),
    phoneToCall: PropTypes.oneOfType([PropTypes.string]),
};
export default ProfileActions;
