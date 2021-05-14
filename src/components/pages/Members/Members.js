import React from 'react';
import Icon from '../../Shared/Icon/Icon';
import ProfileCard from './ProfileCard/ProfileCard';

export default function Members() {
    return (
        <div className="card shadow-lg bg-base-200">
            <div className="card shadow-lg bg-base-200 rounded-b-none">
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
                            <Icon id="FaSearch" />
                        </button>
                    </form>
                </div>
            </div>
            <div className="card-body">
                <div className="grid gap-10 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 ">
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                    <ProfileCard />
                </div>
            </div>
        </div>
    );
}
