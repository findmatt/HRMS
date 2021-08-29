import { useState, useEffect } from 'react';
import { Observable } from 'rxjs';

import { mapAddress } from '../../utilities/FirestoreAPI';

import { Member, Address } from '../../components/Pages/Members/types';
import { initialAddress, initialDetails } from '../../components/Pages/Members/MemberDetails/types';

function useObserveMemberDetails(members$: Observable<Member[]>, id: string): [Member, Address] {
    const [member, setMember] = useState<Member>(initialDetails);
    const [address, setAddress] = useState<Address>(initialAddress);
    const [addressRef, setAddressRef] = useState<string>('');

    useEffect(() => {
        const subscription = members$.subscribe((res: Member[]) => {
            const matchedMember = res.find((element) => element.id === id) as Member;
            if (matchedMember) {
                setMember(matchedMember);
                const newAddressRef = matchedMember?.data?.addressRef?.id || '';
                if (addressRef !== newAddressRef) {
                    setAddressRef(newAddressRef);
                }
            }
        });
        return () => {
            subscription.unsubscribe();
        };
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [members$, id]);

    useEffect(() => {
        const addressUnsub = member.data.addressRef?.onSnapshot((snapshot) => {
            setAddress(mapAddress(snapshot.data()));
        });
        const unsub = () => {
            if (addressUnsub) {
                addressUnsub();
            }
        };
        return unsub;
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [addressRef]);

    return [member, address];
}
export default useObserveMemberDetails;
