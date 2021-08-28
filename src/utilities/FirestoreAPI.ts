import firebase from 'firebase';
import { BehaviorSubject } from 'rxjs';
import toast from 'react-hot-toast';

import { Address, Member } from '../components/Pages/Members/Members.spec';
import { dbService } from '../firebase';

export type FirestoreDocRef = firebase.firestore.DocumentReference;
export type FirestoreDocData = firebase.firestore.DocumentData;

export type Unsubscribe = () => void;

const mapMembers = (id: string, data: firebase.firestore.DocumentData): Member => ({
    id,
    data: {
        name: data.name,
        born: data.born.toDate(),
        nationality: data.nationality,
        gender: data.gender,
        maritalStatus: data.maritalStatus,
        mobile: data.mobile,
        phone: data.phone,
        email: data.email,
        addressRef: data.address,
    },
});

const mapAddress = (data: firebase.firestore.DocumentData): Address => ({
    postal: data.postal,
    country: data.country,
    street: data.street,
    building: data.building,
    unit: data.unit,
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
