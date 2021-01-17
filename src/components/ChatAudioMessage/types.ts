import { TMessageStatuses } from '../../types/messageStatuses';

export type TChatAudioMessageProps = {
    senderName: string;
    audioSrc: string;
    date: number | Date;
    userId: string;
    senderId: string;
    status: TMessageStatuses;
    senderImage?: string;
}
