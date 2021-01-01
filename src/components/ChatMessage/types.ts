export enum messageStatuses {
    delivered = 'delivered',
    seen = 'seen',
    errored = 'errored',
}

export type Attach = {
    type: string;
    name: string;
    url: string;
}

export type TChatMessageProps = {
    imageSrc: string;
    senderId: string;
    userId: string;
    date?: Date | number;
    message?: string;
    isTyping?: boolean;
    status?: messageStatuses;
    attachment?: Attach[];
}
