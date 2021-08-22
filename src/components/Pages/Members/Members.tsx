import React, { FC } from 'react';
import { v4 as uuid } from 'uuid';

import Icon from '../../Reusable/Icon/Icon';
import { matthew, yunsen } from './Members.mock';
import { Member } from './Members.spec';
import ProfileCard from './ProfileCard/ProfileCard';

const Members: FC = () => {
    const members: Member[] = [
        matthew,
        yunsen,
        matthew,
        matthew,
        matthew,
        matthew,
        matthew,
        matthew,
        matthew,
        matthew,
        matthew,
        matthew,
        matthew,
        matthew,
        matthew,
        matthew,
    ];
    return (
        <div className="space-y-2.5 mx-4 lg:mx-0">
            <div className="card shadow-md bg-base-100 backdrop-filter backdrop-blur-lg bg-opacity-30 ">
                <form className="flex m-4">
                    <input
                        type="text"
                        placeholder="Search Members"
                        className="input input-bordered input-group flex-grow flex flex-1"
                    />
                    <button type="button" className="btn btn-square btn-ghost input-group-append">
                        <Icon id="FaSearch" textSize="text-xl" />
                    </button>
                </form>
            </div>
            <div className="card glass h-auto">
                <div className="card-body px-2 lg:px-8 md:px-2 h-auto">
                    <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                        {members.map((member: Member) => (
                            <ProfileCard info={member} key={uuid()} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Members;
