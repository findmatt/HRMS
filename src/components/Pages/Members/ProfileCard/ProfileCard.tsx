import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProfileActions from './ProfileActions';
import ProfileHeader from './ProfileHeader';
import { Member } from '../Members.spec';

const ProfileCard: FC<{ info: Member }> = ({ info }) => {
    const location = useLocation();
    const phoneToCall: Member['phone'] = info.mobile ? info.mobile : info.phone;
    return (
        <div className="card glass compact lg:w-80 sm:w-max place-self-center justify-center">
            <div className="card-body place-self-center m-2">
                <div>
                    <ProfileHeader name={info.name} width="w-60" />
                    <div className="flex flex-shrink-0 items-center justify-left space-x-4 mt-4">
                        <ProfileActions postalCode={info.address.postal} phoneToCall={phoneToCall} />
                        <Link
                            to={{
                                pathname: '/MemberDetails/1',
                                state: { background: location },
                            }}
                        >
                            <button type="button" className="btn neumorph text-xl w-auto bg-neutral m-0">
                                Details
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileCard;
