import { TMessageStatuses } from '../../types/messageStatuses';
import { TDataStatuses } from '../../types/dataStatuses';

export type TContactsProps = {
    dataStatus: TDataStatuses;
    dialogs?: Array<{
        dialogId: string;
        contactId: string;
        name: string;
        surname?: string;
        contactImage?: string;
        unreadMessagesCount?: number;
        isOnline?: boolean;
        isTyping?: boolean;
        message?: {
            message: string;
            status: TMessageStatuses;
            date: string;
            user: {
                id: string;
                name: string;
            };
        };
    }>;
}