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
    name: Name;
    born: Date;
    nationality: string;
    gender: string;
    maritalStatus: string;
    mobile: string;
    phone: string;
    email: string;
    address: Address;
};

export type { Member, Address, Name };
