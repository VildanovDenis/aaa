import { EmojiData } from 'emoji-mart/dist-es/utils/emoji-index/nimble-emoji-index';

export type TEmojiPickerProps = {
    onClickOutside: () => void;
    onSelect?: (emoji: EmojiData) => void;
}