export type TChatMessageProps = {
    imageSrc: string;
    date: Date | number;
    message: string;
    senderId: string;
    userId: string;
    isRead?: boolean;
}