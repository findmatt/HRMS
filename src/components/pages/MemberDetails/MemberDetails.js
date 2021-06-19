/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
// import { useParams } from 'react-router-dom';
import Modal from '../../Shared/Modal/Modal';
import MemberDetailsSection from './MemberDetailsSection';
import ProfileHeader from '../Members/ProfileCard/ProfileHeader';
import Divider from '../../Shared/Divider/Divider';

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
    const keyToLabelSeqGeneral = [
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

    const keyToLabelSeqContact = [
        { key: 'mobile', label: 'Mobile', formatter: null },
        { key: 'phone', label: 'Tel', formatter: null },
        { key: 'email', label: 'Email', formatter: null },
    ];

    const keyToLabelSeqAddress = [
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

    return (
        <Modal bgClass="bg-neutral-focus">
            <div className="card-body flex flex-row flex-wrap items-center justify-between gap-5">
                <ProfileHeader width="w-max" name={info.name} />
            </div>
            <div className="card-body rounded-xl bg-white text-base-content grid grid-cols-1 gap-10 ">
                <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10 ">
                    <MemberDetailsSection
                        title="Particulars"
                        data={info}
                        displaySeqMap={keyToLabelSeqGeneral}
                    />
                    <MemberDetailsSection
                        title="Address"
                        data={address}
                        displaySeqMap={keyToLabelSeqAddress}
                    />
                    <MemberDetailsSection
                        title="Contact"
                        data={info}
                        displaySeqMap={keyToLabelSeqContact}
                    />
                </div>
                <div>
                    <span className="card-title ">Remarks</span>
                    <Divider />
                    <div className="flex flex-col gap-1 pb-2 max-h-60 overflow-scroll overscroll-contain">
                        <div className="w-full shadow-md p-4 border-primary border-l-4">
                            Stays with his father, not yet a christian
                        </div>
                        <div className="w-full shadow-md p-4 border-primary border-l-4">
                            Hospitalised for dengue.
                        </div>
                        <div className="w-full shadow-md p-4 border-primary border-l-4">
                            Visited him at the hospital.
                        </div>
                        <div className="w-full shadow-md p-4 border-primary border-l-4">
                            Visited him at the hospital.
                        </div>
                        <div className="w-full shadow-md p-4 border-primary border-l-4">
                            Visited him at the hospital.
                        </div>
                        <div className="w-full shadow-md p-4 border-primary border-l-4">
                            Visited him at the hospital.
                        </div>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default MemberDetails;
