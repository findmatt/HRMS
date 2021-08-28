import { Member, Address } from './Members.spec';

const dob = new Date(1989, 9, 10);
const address: Address = {
    country: 'SG',
    postal: '380016',
    street: '16 Upper Boon Rd',
    building: '',
    unit: '02-01',
};
const matthew: Member = {
    id: 'test1',
    data: {
        addressRef: null,
        born: dob,
        mobile: '91234567',
        name: {
            ethnic: '一个人',
            first: 'Random',
            last: 'Person',
        },
        nationality: 'SG',
        phone: '',
        email: 'test@gracechurchsg.com',
        gender: 'M',
        maritalStatus: 'S',
    },
};
const yunsen: Member = {
    id: 'test2',
    data: {
        addressRef: null,
        born: dob,
        mobile: '',
        name: {
            ethnic: '云深',
            first: 'Yunsen',
            last: 'Tjung',
        },
        nationality: 'IND',
        phone: '',
        email: 'test2@gracechurchsg.com',
        gender: 'M',
        maritalStatus: 'S',
    },
};
export { dob, address, matthew, yunsen };
