import { TDialog, TDialogMessage } from '../../reducers/dialogs/types';
import { DialogsActionTypes } from '../../actionTypes/dialogs';
import { dataStatuses, TDataStatuses } from '../../../types/dataStatuses';
import { TSetDialogData, TSetDialogDataStatus } from './types';
import { TReduxDispatch } from '../../types';
import { dialogsApi } from '../../../api';
import { AxiosResponse } from 'axios';

export const setDialogData = (data: TDialog): TSetDialogData => ({
    type: DialogsActionTypes.setDialogData,
    payload: data,
});

export const setDialogDataStatus = (dialogId: string, status: TDataStatuses = 'initial'): TSetDialogDataStatus => ({
    type: DialogsActionTypes.setDialogDataStatus,
    payload: { dialogId, status },
});

export const fetchDialogData = (id: string) => async (dispatch: TReduxDispatch) => {
    dispatch(setDialogDataStatus(id, dataStatuses.fetching));

    try {
        const res: AxiosResponse<TDialogMessage[]> = await dialogsApi.getDialogMessages(id);

        if (res.status === 200) {
            const newData: TDialog = { messages: res.data || [], dialogId: id };

            dispatch(setDialogData(newData as TDialog));
            dispatch(setDialogDataStatus(id, dataStatuses.success));
        }
    } catch (e) {
        dispatch(setDialogDataStatus(id, dataStatuses.error));
        console.error(e);
    }
};
