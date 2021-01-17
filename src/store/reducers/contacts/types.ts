import { TMessageStatuses } from '../../../types/messageStatuses'
import { TDataStatuses } from '../../../types/dataStatuses'

export type TMessage = {
    message: string;
    status: TMessageStatuses;
    date: string;
    user: {
        id: string;
        name: string;
        surname?: string;
    }
}

export type TContact = {
    dialogId: string;
    contactId: string;
    name: string;
    surname?: string;
    contactImage?: string;
    isOnline?: boolean;
    isTyping?: boolean;
    unreadMessagesCount?: number;
    message?: TMessage;
}

export type TContactsState = {
    data: TContact[];
    dataStatus: TDataStatuses;
}
