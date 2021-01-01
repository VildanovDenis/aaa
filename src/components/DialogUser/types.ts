export type TDialogUserProps = {
    id: string;
    name: string;
    avatar?: string;
    date?: number | Date;
    lastMessage?: string;
    unreadMessagesCount?: number;
    isOnline?: boolean;
}
