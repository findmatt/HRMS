import React, { FC } from 'react';
import { Link, useLocation } from 'react-router-dom';
import ProfileActions from './ProfileActions';
import ProfileHeader from './ProfileHeader';
import { Member } from '../Members.spec';

const ProfileCard: FC<{ member: Member }> = ({ member }) => {
    const location = useLocation();

    const { id, data } = member;
    const memberDetails = JSON.stringify(member);
    const phoneToCall = data.mobile ? data.mobile : data.phone;
    const postalCode = data.addressRef ? data.addressRef.id.substring(0, 6) : '';

    return (
        <div className="card glass compact lg:w-80 sm:w-max place-self-center justify-center">
            <div className="card-body place-self-center m-2">
                <div>
                    <ProfileHeader name={data.name} width="w-60" />
                    <div className="flex flex-shrink-0 items-center justify-left space-x-4 mt-4">
                        <ProfileActions postalCode={postalCode} phoneToCall={phoneToCall} />
                        <Link
                            to={{
                                pathname: `/MemberDetails/${id}`,
                                state: { background: location, memberDetails },
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
