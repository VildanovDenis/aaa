export type TAttachPreviewProps = {
    attachments: File[];
    onDeleteImage: (indexToDelete: number) => void;
};