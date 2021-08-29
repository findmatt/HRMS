import React, { FC } from 'react';
import { Name } from '../../types';

type Props = {
    name: Name;
    width: string;
};

const ProfileHeader: FC<Props> = ({ name, width }) => (
    <div className={`flex items-center space-x-4 h-max ${width}`}>
        <img
            className="object-fill h-16 w-16 shadow mask mask-squircle"
            alt="Avatar"
            src="https://htmlstream.com/preview/unify-v2.6.3/assets/img-temp/400x450/img5.jpg"
        />
        <div className="break-all">
            <span className="text-lg font-bold">{name?.ethnic || ''}</span>
            <br />
            <span>{`${name?.first || ''} ${name?.last || ''}`}</span>
        </div>
    </div>
);

ProfileHeader.defaultProps = {
    width: 'w-max',
};
export default ProfileHeader;
