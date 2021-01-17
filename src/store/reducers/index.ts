import { combineReducers } from 'redux';

import { contactsReducer } from './contacts';
import { dialogsReducer } from './dialogs';

export const rootReducer = combineReducers({
    contactsReducer,
    dialogsReducer
});
