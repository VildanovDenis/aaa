import { TMessageStatuses } from '../../types/messageStatuses';

export type Attach = {
    type: string;
    name: string;
    url: string;
}

export type TChatMessageProps = {
    userId: string;
    senderName: string;
    senderId: string;
    senderImage?: string;
    date?: Date | number;
    message?: string;
    isTyping?: boolean;
    status?: TMessageStatuses;
    attachment?: Attach[];
}
