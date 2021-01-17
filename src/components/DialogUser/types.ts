import { TMessageStatuses } from '../../types/messageStatuses';

export type TDialogUserProps = {
    contactId: string;
    ownerId: string;
    name: string;
    surname?: string;
    contactImage?: string;
    message: {
        message: string;
        status: TMessageStatuses;
        date: number | Date;
        user: {
            id: string;
            name: string;
        };
    } | null;
    unreadMessagesCount?: number;
    isOnline?: boolean;
}
