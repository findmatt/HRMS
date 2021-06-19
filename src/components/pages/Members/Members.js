import React from 'react';
import { v4 as uuid } from 'uuid';

import Icon from '../../Shared/Icon/Icon';
import ProfileCard from './ProfileCard/ProfileCard';

export default function Members() {
    const dob = new Date(1989, 9, 10);
    const matthew = {
        address: {
            postal: '538685',
        },
        born: dob,
        mobile: '91234567',
        name: {
            ethnic: '曾奕晞',
            first: 'Matthew asdsadasdasdasdasdasdasdsadas Yi Shi',
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
    const members = [
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
                    <button
                        type="button"
                        className="btn btn-square btn-ghost input-group-append"
                    >
                        <Icon id="FaSearch" textSize="text-xl" />
                    </button>
                </form>
            </div>
            <div className=" card glass bg-base-100 h-auto ">
                <div className="card-body px-2 lg:px-8 md:px-2 h-auto">
                    <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                        {members.map((member) => (
                            <ProfileCard info={member} key={uuid()} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
