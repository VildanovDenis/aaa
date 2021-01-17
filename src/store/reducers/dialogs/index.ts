import { TDialogsState } from './types';
import { TDialogsActions } from '../../actions/dialogs/types';
import { DialogsActionTypes } from '../../actionTypes/dialogs';

const initialState: TDialogsState = {};

export const dialogsReducer = (
    state: TDialogsState = initialState,
    { type, payload }: TDialogsActions
) => {
    switch (type) {
        case (DialogsActionTypes.setDialogDataStatus): {
            // Getting messages on 1st mount only, after that sockets should do work.
            // TODO: load previous messages with pagination using.
            const { dialogId, status } = payload;
            const newDialog = {
                messages: state[dialogId]?.messages || [],
                dialogId: dialogId,
                status: status,
            };

            return { ...state, [dialogId]: newDialog }
        }

        case (DialogsActionTypes.setDialogData): {
            return {
                ...state,
                [payload.dialogId]: payload
            };
        }

        default: {
            return state;
        }
    }
}
