/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/interactive-supports-focus */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { FunctionComponent, ReactNode, MouseEvent } from 'react';
import { useHistory } from 'react-router-dom';

type Props = {
    children: ReactNode;
    bgClass: string;
};
// eslint-disable-next-line react/prop-types
const Modal: FunctionComponent<Props> = ({ children, bgClass }) => {
    const history: any = useHistory();
    React.useEffect(() => {
        document.body.classList.add('overflow-hidden');

        return () => {
            document.body.classList.remove('overflow-hidden');
        };
    }, []);
    const closeModal = (evt: MouseEvent) => {
        evt.stopPropagation();
        history.goBack();
    };
    return (
        <div
            className="fixed inset-0 w-screen h-screen pt-8 backdrop-filter backdrop-blur-lg bg-opacity-30 bg-base-300 z-20 flex items-center justify-center overflow-scroll"
            onClick={closeModal}
            role="dialog"
        >
            <div
                className={`card ${bgClass} relative text-base-100 neumorph flex flex-grow m-4 max-w-screen-lg max-h-screen overflow-scroll `}
                onClick={(evt) => {
                    evt.stopPropagation();
                }}
                role="dialog"
            >
                <div className="flex flex-row justify-end mt-2 mr-2">
                    <button type="button" onClick={closeModal}>
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 25 25"
                            className="inline-block w-8 h-8 stroke-current"
                        >
                            <path d="M6 18L18 6M6 6l12 12" />
                        </svg>
                    </button>
                </div>
                {children}
            </div>
        </div>
    );
};

export default Modal;
