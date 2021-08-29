import { FirestoreDocRef } from '../../../utilities/FirestoreAPI';

type Address = {
    postal: string;
    country: string;
    street: string;
    building: string;
    unit: string;
};
type Name = {
    ethnic: string;
    first: string;
    last: string;
};
type Member = {
    id: string;
    data: MemberData;
};

type MemberData = {
    name: Name;
    born: Date;
    nationality: string;
    gender: string;
    maritalStatus: string;
    mobile: string;
    phone: string;
    email: string;
    addressRef: FirestoreDocRef | null;
};

export type { Member, MemberData, Address, Name };
