import React from 'react';
import PropTypes from 'prop-types';
import Icon from '../../../Shared/Icon/Icon';

function ProfileCard(props) {
    const { info } = props;
    const phoneToCall = info.mobile ? info.mobile : info.phone;
    const directionsLink = `http://maps.google.com/?daddr=Singapore+${info.address}&saddr=Current%20Location`;
    return (
        <div className="card shadow-lg side compact bg-base-100 w-80 place-self-center bordered">
            <div className="flex-row flex-wrap flex-1 items-center justify-center card-body">
                <div className="flex-row flex-shrink-0 items-center  space-x-4 card-body">
                    <div className=" w-14 h-14 ">
                        <img
                            className="object-fill w-full shadow mask mask-squircle"
                            alt="Avatar"
                            src="http://morgancarter.com.au/assets/images/blog/encouraging-upload/thumbnail.png"
                        />
                    </div>
                    <div>
                        <h2 className="text-lg font-bold">
                            {info.name.ethnic}
                        </h2>
                        <p className=" text-base-content text-opacity-90">
                            {`${info.name.first} ${info.name.last}`}
                        </p>
                    </div>
                </div>
                <div className="flex-row items-center space-x-4 text-primary">
                    <a
                        type="button"
                        className="btn btn-ghost shadow-lg border-gray-100 "
                        href={directionsLink}
                        target="_blank"
                        disabled={!info.address || info.address === ''}
                        rel="noreferrer"
                    >
                        <Icon id="SiGooglemaps" />
                    </a>
                    <a
                        type="button"
                        className="btn btn-ghost shadow-lg btn-square btn-md border-gray-100 "
                        href={`tel:${phoneToCall}`}
                        disabled={phoneToCall === ''}
                    >
                        <Icon id="TiPhoneOutline" />
                    </a>
                    <button
                        type="button"
                        className="btn btn-outline shadow-lg text-xl w-auto"
                    >
                        Details
                    </button>
                </div>
            </div>
            {/* <div className="card-body -m-5">
                <button type="button" className="btn btn-neutral">
                    more info{' '}
                </button>
            </div> */}
        </div>
    );
}

ProfileCard.propTypes = {
    info: PropTypes.oneOfType([PropTypes.object]).isRequired,
};

export default ProfileCard;
