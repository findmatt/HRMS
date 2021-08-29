/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { FC, useState, useEffect, SyntheticEvent } from 'react';
import Fuse from 'fuse.js';

import Icon from '../../Reusable/Icon';
import ProfileCard from './ProfileCard';

import observeMembers from '../../../utilities/FirestoreAPI';

import { Member } from './types';

const Members: FC = () => {
    const [members, setMembers] = useState<Member[]>([]);
    const [filteredMembers, setFilteredMembers] = useState<Member[]>([]);
    const [filter, setFilter] = useState<string>('');

    useEffect(() => {
        const unsubscribe = observeMembers(setMembers);
        return unsubscribe;
    }, []);

    useEffect(() => {
        const fuse = new Fuse(members, {
            threshold: 0.5,
            keys: ['data.name.ethnic', 'data.name.first', 'data.name.last'],
        });
        const searchResult = fuse.search(filter);
        setFilteredMembers(filter === '' ? members : searchResult.map((element) => element.item));
    }, [filter, members]);

    const onSearch = (evt: SyntheticEvent) => {
        evt.preventDefault();
        (document.activeElement as HTMLElement).blur();
        const target = evt.target as typeof evt.target & {
            filter: { value: string };
        };
        setFilter(target.filter.value.toLowerCase()); // typechecks!
    };
    return (
        <div className="space-y-2.5 mx-4 lg:mx-0">
            <div className="card shadow-md bg-base-100 backdrop-filter backdrop-blur-lg bg-opacity-30 ">
                <form className="flex m-4" onSubmit={onSearch}>
                    <input
                        type="text"
                        name="filter"
                        placeholder="Search Members"
                        className="input input-bordered input-group flex-grow flex flex-1"
                    />
                    <button type="submit" className="btn btn-square btn-ghost input-group-append">
                        <Icon id="FaSearch" textSize="text-xl" />
                    </button>
                </form>
            </div>
            <div className="card glass h-auto">
                <div className="card-body px-2 lg:px-8 md:px-2 h-auto">
                    <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                        {filteredMembers.map((member: Member) => (
                            <ProfileCard member={member} key={member.id} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};
export default Members;
