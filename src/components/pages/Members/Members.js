import React from 'react';
import Icon from '../../Shared/Icon/Icon';
import ProfileCard from './ProfileCard/ProfileCard';

export default function Members() {
    const dob = new Date(1989, 9, 10);
    const matthew = {
        address: '538685',
        born: dob,
        mobile: '91234567',
        name: {
            ethnic: '曾奕晞',
            first: 'Matthew',
            last: 'Chan',
        },
        nationality: 'SG',
        phone: '',
    };
    const yunsen = {
        address: '',
        born: dob,
        mobile: '',
        name: {
            ethnic: '云深',
            first: 'Yunsen',
            last: 'Tjung',
        },
        nationality: 'IND',
        phone: '',
    };
    const members = [matthew, yunsen];
    return (
        <div className="card shadow-lg bg-base-100">
            <div className="card shadow-lg bg-base-100 rounded-b-none">
                <div className="card-body ">
                    <h2 className="card-title">Member List</h2>
                    <form className="flex flex-1 pb-4 lg:w-9/12 md:w-9/12 sm:w-max place-self-center">
                        <input
                            type="text"
                            placeholder="Search Members"
                            className="input input-bordered input-group sm:flex-grow"
                        />
                        <button
                            type="button"
                            className="btn btn-square btn-ghost input-group-append"
                        >
                            <Icon id="FaSearch" textSize="text-xl" />
                        </button>
                    </form>
                </div>
            </div>
            <div className="card-body">
                <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    {members.map((member) => (
                        <ProfileCard info={member} />
                    ))}
                </div>
            </div>
        </div>
    );
}
