/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
// import { useParams } from 'react-router-dom';
import Modal from '../../Shared/Modal/Modal';
import MemberDetailsSection from './MemberDetailsSection';
import ProfileHeader from '../Members/ProfileCard/ProfileHeader';
import Divider from '../../Shared/Divider/Divider';
import MemberNotes from './MemberNotes';

function MemberDetails() {
    // const { id } = useParams();
    const dob = new Date('September 10 1989 00:00');
    const address = {
        country: 'SG',
        postal: '380016',
        street: '16 Upper Boon Rd',
        building: '',
        unit: '02-01',
    };
    const info = {
        born: dob,
        address: '380016',
        mobile: '91234567',
        name: {
            ethnic: '曾奕晞',
            first: 'Matthew',
            last: 'Chan',
        },
        nationality: 'SG',
        gender: 'M',
        maritalStatus: 'S',
        phone: '',
        email: 'test@gracechurchsg.com',
    };

    const notes = [
        'Stays with his father, not yet a christian',
        'Hospitalised for dengue. Visited him at the hospital',
    ];

    const displayConfigParticulars = [
        { key: 'born', label: 'Age', formatter: 'computeAge' },
        { key: 'born', label: 'Birth Date', formatter: 'formatDate' },
        {
            key: 'nationality',
            label: 'Nationality',
            formatter: 'formatNationality',
        },
        { key: 'gender', label: 'Gender', formatter: 'formatGender' },
        {
            key: 'maritalStatus',
            label: 'Marital Status',
            formatter: 'formatMaritalStatus',
        },
    ];

    const displayConfigContact = [
        { key: 'mobile', label: 'Mobile', formatter: null },
        { key: 'phone', label: 'Tel', formatter: null },
        { key: 'email', label: 'Email', formatter: null },
    ];

    const displayConfigAddress = [
        { key: 'country', label: 'Country', formatter: 'formatCountryName' },
        { key: 'postal', label: 'Postal Code', formatter: null },
        { key: 'street', label: 'Block/Street', formatter: null },
        { key: 'building', label: 'Building', formatter: null },
        {
            key: 'unit',
            label: 'Unit No',
            formatter: 'addressUnit',
        },
    ];

    // const phoneToCall = info.mobile ? info.mobile : info.phone;
    const [infoVisible, setInfoVisible] = useState(true);
    const [editNotes, setEditNotes] = useState(false);
    const handleShowRemarks = () => {
        setInfoVisible(!infoVisible);
    };
    const handleEdit = () => {
        setEditNotes(!editNotes);
    };
    const handleSave = () => {
        setEditNotes(!editNotes);
    };

    return (
        <Modal bgClass="bg-neutral-focus">
            <div className="card-body flex flex-row flex-wrap items-center justify-between gap-5">
                <ProfileHeader width="w-max" name={info.name} />
            </div>
            {infoVisible ? (
                <div
                    className={`card-body rounded-xl bg-base-100 text-base-content grid grid-cols-1 gap-10 `}
                >
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                        <MemberDetailsSection
                            title="Particulars"
                            data={info}
                            displaySeqMap={displayConfigParticulars}
                        />
                        <MemberDetailsSection
                            title="Address"
                            data={address}
                            displaySeqMap={displayConfigAddress}
                        />
                        <MemberDetailsSection
                            title="Contact"
                            data={info}
                            displaySeqMap={displayConfigContact}
                        />
                    </div>
                    <button
                        type="button"
                        label="Show Notes"
                        className="btn neumorph btn-ghost bg-base-200 text-primary border border-base-300 border-opacity-20"
                        onClick={handleShowRemarks}
                    >
                        Additional Notes
                    </button>
                </div>
            ) : (
                <div className="card-body rounded-xl bg-white text-base-content grid grid-cols-1">
                    <div>
                        <span className="card-title ">Notes</span>
                        <Divider />
                    </div>
                    <form className="space-y-4">
                        <MemberNotes notes={notes} editMode={editNotes} />
                        <div className="flex flex-1 flex-row space-x-4 justify-end flex-grow">
                            {editNotes ? (
                                <div className="flex flex-1 flex-row space-x-4 justify-end">
                                    <button
                                        type="button"
                                        label="discard changes"
                                        className="btn btn-outline btn-neutral neumorph flex-grow md:flex-grow-0 md:w-20"
                                        onClick={handleEdit}
                                    >
                                        Discard
                                    </button>
                                    <input
                                        type="submit"
                                        value="Save"
                                        label="Save Remarks"
                                        className="btn btn-accent neumorph flex-grow md:flex-grow-0"
                                        onClick={handleSave}
                                    />
                                </div>
                            ) : (
                                <div className="flex flex-1 flex-row space-x-4 justify-end">
                                    <button
                                        type="button"
                                        label="Show Info"
                                        className="btn btn-success neumorph flex-grow md:flex-grow-0"
                                        onClick={handleShowRemarks}
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="button"
                                        label="Edit Remarks"
                                        className="btn btn-warning neumorph flex-grow md:flex-grow-0"
                                        onClick={handleEdit}
                                    >
                                        Edit
                                    </button>
                                </div>
                            )}
                        </div>
                    </form>
                </div>
            )}
        </Modal>
    );
}

export default MemberDetails;
