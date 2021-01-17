import { TMessageStatuses } from '../../../types/messageStatuses';
import { TDataStatuses } from '../../../types/dataStatuses';

export type TDialogMessage = {
    dialogId: string;
    senderName: string;
    senderId: string;
    message: string;
    date: string;
    status: TMessageStatuses
    senderSurname?: string;
    senderImage?: string;
}

export type TDialog = {
    dialogId: string;
    messages: TDialogMessage[];
    status?: TDataStatuses;
}

export type TDialogsState = {
    [key: string]: TDialog;
}