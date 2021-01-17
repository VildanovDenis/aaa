import { ContactsActionTypes } from '../../actionTypes/contacts';
import { TContact } from '../../reducers/contacts/types';
import { TDataStatuses } from '../../../types/dataStatuses'

export type TSetContactsData = {
    type: ContactsActionTypes.setContactsData;
    payload: TContact[];
}

export type TSetContactsStatus = {
    type: ContactsActionTypes.setContactsStatus;
    payload: TDataStatuses;
}

export type TContactsActions = TSetContactsData | TSetContactsStatus
