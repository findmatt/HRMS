import React, { FC } from 'react';
import Icon from '../../../Reusable/Icon/Icon';
import { Member, Address } from '../Members.spec';

type Props = {
    phoneToCall: Member['phone'];
    postalCode: Address['postal'];
};

const ProfileActions: FC<Props> = ({ phoneToCall, postalCode }) => (
    <div className="flex flex-row items-center justify-center space-x-4 text-primary ">
        <a
            href={postalCode ? `http://maps.google.com/?saddr=Current+Location&daddr=Singapore+${postalCode}` : ''}
            target="_blank"
            rel="noreferrer"
        >
            <button
                type="button"
                className=" btn btn-ghost 
                            bg-gradient-to-br from-base-100 to-base-300 border-0 neumorph 
                            hover:text-base-content hover:transform hover:scale-110"
                disabled={!postalCode}
            >
                <Icon id="SiGooglemaps" />
            </button>
        </a>
        <a href={`tel:${phoneToCall}`}>
            <button
                type="button"
                className="btn btn-ghost border-0 neumorph
                            bg-gradient-to-br from-base-100 to-base-300 
                            hover:text-base-content hover:transform hover:scale-110 "
                disabled={phoneToCall === ''}
            >
                <Icon id="TiPhoneOutline" />
            </button>
        </a>
    </div>
);

export default ProfileActions;
