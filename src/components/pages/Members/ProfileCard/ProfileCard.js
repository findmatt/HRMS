import React from 'react';
import Icon from '../../../Shared/Icon/Icon';

function ProfileCard() {
    return (
        <div className="card shadow-lg side compact bg-base-100">
            <div className="flex-row flex-wrap flex-1 items-center space-x-4 card-body">
                <div className="flex-row flex-shrink-0 items-center space-x-4 card-body">
                    <img
                        className=" w-14 h-14 shadow mask mask-squircle"
                        alt="Avatar"
                        src="https://i.pravatar.cc/500?img=32"
                    />
                    <div>
                        <h2 className="text-lg font-bold">曾奕睎</h2>
                        <p className=" text-base-content text-opacity-90">
                            Matthew Chan
                        </p>
                    </div>
                </div>
                <div className="flex-row items-center space-x-4 justify-right text-primary">
                    <button
                        type="button"
                        className="btn btn-ghost shadow-lg btn-square btn-md border-gray-100"
                    >
                        <Icon id="SiGooglemaps" />
                    </button>
                    <button
                        type="button"
                        className="btn btn-ghost shadow-lg btn-square btn-md border-gray-100"
                    >
                        <Icon id="TiPhoneOutline" />
                    </button>
                </div>
            </div>
            <div className="card-body -m-5">
                <button type="button" className="btn btn-neutral">
                    more info{' '}
                </button>
            </div>
        </div>
    );
}
export default ProfileCard;
