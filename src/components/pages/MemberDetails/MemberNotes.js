import React from 'react';
import PropTypes from 'prop-types';
import { AiOutlinePlus } from 'react-icons/ai';
import TextareaAutosize from 'react-textarea-autosize';

function MemberNotes({ notes, editMode }) {
    const handleChange = () => {};
    return (
        <form className="flex flex-col gap-1 pb-2 max-h-80 overflow-scroll overscroll-contain">
            {notes.map((note) => (
                <div className="flex flex-1 flex-row items-center space-x-2 border-primary border-l-4 shadow-md p-4 bg-neutral-content">
                    <TextareaAutosize
                        className="resize-none flex-grow bg-neutral-content"
                        value={note}
                        onChange={handleChange}
                        disabled={editMode ? '' : 'disabled'}
                    />
                    {editMode && (
                        <button
                            type="button"
                            label="remove"
                            className="btn btn-error btn-circle btn-sm "
                        >
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                className="inline-block w-6 h-6 stroke-current"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M6 18L18 6M6 6l12 12"
                                />
                            </svg>
                        </button>
                    )}
                </div>
            ))}
            {editMode && (
                <button
                    type="button"
                    label="remove"
                    className="btn btn-neutral btn-xs text-2xl rounded-t-none place-self-center"
                >
                    <AiOutlinePlus />
                </button>
            )}
        </form>
    );
}

MemberNotes.propTypes = {
    notes: PropTypes.arrayOf(PropTypes.string),
    editMode: PropTypes.bool,
};

export default MemberNotes;
