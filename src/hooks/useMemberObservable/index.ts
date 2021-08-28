import { useState, useEffect } from 'react';
import { Observable } from 'rxjs';

import { FirestoreDocData, mapAddress } from '../../utilities/FirestoreAPI';

import { Member, Address } from '../../components/Pages/Members/Members.spec';
import { initialAddress, initialDetails } from '../../components/Pages/MemberDetails/MemberDetails.spec';

function useObserveMembers(observable: Observable<Member[]>, id: string): [Member, Address] {
    const [member, setMember] = useState<Member>(initialDetails);
    const [address, setAddress] = useState<Address>(initialAddress);

    useEffect(() => {
        // let addressUnsub: undefined | (() => void);
        const subscription = observable.subscribe((res: Member[]) => {
            const matchedMember = res.find((element) => element.id === id) as Member;
            if (matchedMember) {
                setMember(matchedMember);
            }
        });
        const addressUnsub = member.data.addressRef?.onSnapshot((snapshot) => {
            setAddress(mapAddress(snapshot.data() as FirestoreDocData));
        });
        return () => {
            subscription.unsubscribe();
            if (addressUnsub) {
                addressUnsub();
            }
        };
    }, [observable, id, member]);

    return [member, address];
}
export default useObserveMembers;
