import React, { memo, useRef } from 'react';
import { Picker } from 'emoji-mart';
import classNames from 'classnames';

import { useClickOutside } from '../../../hooks/useClickOutside';

import { TEmojiPickerProps } from './types';

export const EmojiPicker = memo(
    ({ onSelect, onClickOutside }: TEmojiPickerProps) => {
        const ref = useRef(null);

        useClickOutside(ref, onClickOutside);

        return (
            <div
                ref={ref}
                className={classNames('emoji-picker-wrapper')}
            >
                <Picker set='apple' onSelect={onSelect} />
            </div>
        );
    }
);
