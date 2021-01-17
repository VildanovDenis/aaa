import { fetchContacts } from '../../../store/actions/contacts';
import { TDataStatuses } from '../../../types/dataStatuses';
import { TContact } from '../../../store/reducers/contacts/types';

export type THomeDispatchProps = {
    fetchContacts: typeof fetchContacts
}

export type THomeStateProps = {
    contactsStatus: TDataStatuses;
    contacts: TContact[];
}

export type THomeProps = THomeDispatchProps & THomeStateProps;