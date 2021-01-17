import { TContactsState } from './contacts/types';
import { TDialogsState } from './dialogs/types';

export type TState = {
    contactsReducer: TContactsState;
    dialogsReducer: TDialogsState;
}
