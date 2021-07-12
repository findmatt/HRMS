import React, { useContext } from 'react';
import { DefaultContext } from 'react-icons/lib';
import { db } from '../firebase';

const DBContext = React.createContext();

export function useDB() {
    return useContext(DBContext);
}

const DBProvider = (props) => {
    // eslint-disable-next-line react/prop-types
    const { children } = props;

    const getAddresses = (memberAddress) => {
        const formattedAddresses = [];
        memberAddress.forEach((item) => {
            item.get()
                .then((doc) => {
                    formattedAddresses.push({
                        country: doc.data().country,
                        building: doc.data().building,
                        postal: doc.data().postal,
                        street: doc.data().street,
                        unit: doc.data().unit,
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        });
        return formattedAddresses;
    };

    const getAllMembers = () => {
        const memberCollection = db.collection('members');
        const formattedMembers = [];
        memberCollection.onSnapshot((snapshot) => {
            snapshot.forEach((doc) => {
                const formattedAddresses = getAddresses(doc.data().addresses);
                formattedMembers.push({
                    ID: doc.id,
                    firstName: doc.data().name.first,
                    lastName: doc.data().name.last,
                    chineseName: doc.data().name.ethnic,
                    DOB: doc.data().born,
                    nationality: doc.data().nationality,
                    phone: doc.data().phone,
                    mobile: doc.data().mobile,
                    formattedAddresses,
                });
            });
        });
        return formattedMembers;
    };

    const getMember = (id) => {};

    const value = {
        getAllMembers,
        getMember,
    };

    return <DBContext.Provider value={value}>{children}</DBContext.Provider>;
};

export { DBProvider };
