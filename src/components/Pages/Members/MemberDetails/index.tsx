import React, { useState, FC } from 'react';
import { useParams } from 'react-router-dom';

import { members$ } from '../../../../utilities/FirestoreAPI';
import useObserveMembers from '../../../../hooks/useMemberObservable';

import Modal from '../../../Reusable/Modal';
import ProfileHeader from '../ProfileCard/ProfileHeader';
import MemberDetailsSection from './MemberDetailsSection';
import SectionTemplates from './MemberDetailsSection/types';
import MemberNotes from './MemberNotes';
import Divider from '../../../Reusable/Divider';

import notes from './mock';

const MemberDetails: FC = () => {
    const { id } = useParams<{ id: string }>();

    const [member, address] = useObserveMembers(members$, id);

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
                <ProfileHeader width="w-max" name={member.data.name} />
            </div>
            {infoVisible ? (
                <div className={`card-body rounded-xl bg-base-100 text-base-content grid grid-cols-1 gap-10 `}>
                    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10">
                        <MemberDetailsSection
                            title="Particulars"
                            data={member.data}
                            sectionTemplate={SectionTemplates.templateParticulars}
                        />
                        <MemberDetailsSection
                            title="Address"
                            data={address}
                            sectionTemplate={SectionTemplates.templateAddress}
                        />
                        <MemberDetailsSection
                            title="Contact"
                            data={member.data}
                            sectionTemplate={SectionTemplates.templateContact}
                        />
                    </div>
                    <button
                        type="button"
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
                                        className="btn btn-outline btn-neutral neumorph flex-grow md:flex-grow-0 md:w-20"
                                        onClick={handleEdit}
                                    >
                                        Discard
                                    </button>
                                    <input
                                        type="submit"
                                        value="Save"
                                        className="btn btn-accent neumorph flex-grow md:flex-grow-0"
                                        onClick={handleSave}
                                    />
                                </div>
                            ) : (
                                <div className="flex flex-1 flex-row space-x-4 justify-end">
                                    <button
                                        type="button"
                                        className="btn btn-success neumorph flex-grow md:flex-grow-0"
                                        onClick={handleShowRemarks}
                                    >
                                        Back
                                    </button>
                                    <button
                                        type="button"
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
};

export default MemberDetails;
