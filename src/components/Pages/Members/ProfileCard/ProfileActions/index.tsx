import React, { FC, MouseEvent } from 'react';
import Icon from '../../../../Reusable/Icon/Icon';
import { MemberData, Address } from '../../types';

type Props = {
    phoneToCall: MemberData['phone'];
    postalCode: Address['postal'];
};

const ProfileActions: FC<Props> = ({ phoneToCall, postalCode }) => {
    const openMaps = (evt: MouseEvent) => {
        evt.stopPropagation();
        window.open(`http://maps.google.com/?saddr=Current+Location&daddr=Singapore+${postalCode}`);
    };
    const openPhone = (evt: MouseEvent) => {
        evt.stopPropagation();
        window.open(`tel:${phoneToCall}`);
    };
    return (
        <div className="flex flex-row items-center justify-center space-x-4 text-primary ">
            <button
                type="button"
                className=" btn btn-ghost 
                            bg-gradient-to-br from-base-100 to-base-300 border-0 neumorph 
                            hover:text-base-content hover:transform hover:scale-110"
                disabled={!postalCode}
                onClick={openMaps}
            >
                <Icon id="SiGooglemaps" />
            </button>
            <button
                type="button"
                className="btn btn-ghost border-0 neumorph
                            bg-gradient-to-br from-base-100 to-base-300 
                            hover:text-base-content hover:transform hover:scale-110 "
                disabled={phoneToCall === ''}
                onClick={openPhone}
            >
                <Icon id="TiPhoneOutline" />
            </button>
        </div>
    );
};

export default ProfileActions;
