import { TContactsState } from './types';
import { dataStatuses } from '../../../types';
import { ContactsActionTypes } from '../../actionTypes/contacts';
import { TContactsActions } from '../../actions/contacts/types';

const initialState: TContactsState = {
    data: [],
    dataStatus: dataStatuses.initial,
}

export const contactsReducer = (
    state: TContactsState = initialState,
    { type, payload }: TContactsActions
) => {
    switch (type) {
        case ContactsActionTypes.setContactsData: {
            return { ...state, data: payload };
        }

        case ContactsActionTypes.setContactsStatus: {
            return { ...state, dataStatus: payload };
        }

        default: {
            return state;
        }
    }
};