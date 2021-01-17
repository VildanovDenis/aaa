import { TContact } from '../../reducers/contacts/types';
import { ContactsActionTypes } from '../../actionTypes/contacts';
import { dataStatuses, TDataStatuses } from '../../../types/dataStatuses';
import { TReduxDispatch } from '../../types';

import { TSetContactsData, TSetContactsStatus } from './types';
import { contactsApi } from '../../../api';

export const setContactsData = (data: TContact[]): TSetContactsData => ({
    type: ContactsActionTypes.setContactsData,
    payload: data,
});

export const setContactsStatus = (data: TDataStatuses): TSetContactsStatus => ({
    type: ContactsActionTypes.setContactsStatus,
    payload: data,
});

export const fetchContacts = () => async (dispatch: TReduxDispatch) => {
    dispatch(setContactsStatus(dataStatuses.fetching));

    try {
        const res = await contactsApi.getContacts();

        if (res.status === 200) {
            dispatch(setContactsData(res.data as TContact[]));
            dispatch(setContactsStatus(dataStatuses.success));
        }
    } catch(e) {
        dispatch(setContactsStatus(dataStatuses.error));
        console.error(e);
    }
}
