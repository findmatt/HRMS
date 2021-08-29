import firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';
import toast from 'react-hot-toast';

import { Address, Member } from '../components/Pages/Members/types';
import { dbService } from '../firebase';

export type FirestoreDocRef = firebase.firestore.DocumentReference;
export type FirestoreDocData = firebase.firestore.DocumentData;

export type Unsubscribe = () => void;

const mapMembers = (id: string, data: firebase.firestore.DocumentData | undefined): Member => ({
    id,
    data: {
        name: data ? data.name : '',
        born: data ? data.born?.toDate() : new Date(),
        nationality: data ? data.nationality : '',
        gender: data ? data.gender : '',
        maritalStatus: data ? data.maritalStatus : '',
        mobile: data ? data.mobile : '',
        phone: data ? data.phone : '',
        email: data ? data.email : '',
        addressRef: data ? data.address : '',
    },
});

const mapAddress = (data: firebase.firestore.DocumentData | undefined): Address => ({
    postal: data ? data.postal : '',
    country: data ? data.country : '',
    street: data ? data.street : '',
    building: data ? data.building : '',
    unit: data ? data.unit : '',
});

const members$ = new BehaviorSubject<Member[]>([]);

const observeMembers = (setMembers: (members: Member[]) => void): Unsubscribe => {
    const unsubscribe = dbService.collection('members').onSnapshot(
        (snapshot) => {
            const formattedMembers = [] as Member[];
            snapshot.forEach((doc) => {
                formattedMembers.push(mapMembers(doc.id, doc.data()));
            });
            setMembers(formattedMembers);
            members$.next(formattedMembers);
        },
        (err) => {
            toast.error(err.message);
        }
    );
    return unsubscribe;
};
export default observeMembers;
export { mapMembers, mapAddress, members$ };
