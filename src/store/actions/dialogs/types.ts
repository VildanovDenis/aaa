import { DialogsActionTypes } from '../../actionTypes/dialogs';
import { TDialog } from '../../reducers/dialogs/types';
import { TDataStatuses } from '../../../types/dataStatuses';

export type TSetDialogData = {
    type: DialogsActionTypes.setDialogData;
    payload: TDialog;
}

export type TSetDialogDataStatus = {
    type: DialogsActionTypes.setDialogDataStatus;
    payload: {
        dialogId: string;
        status: TDataStatuses;
    };
}

export type TDialogsActions = TSetDialogDataStatus | TSetDialogData