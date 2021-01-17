import React, { useEffect, useState } from 'react';

import { TAttachPreviewProps } from './types';
import { LayoutScroll } from '../../../components/LayoutScroll';
import { LayoutWithShadow } from '../../../components/LayoutWithShadow';

export const AttachPreview = ({ attachments, onDeleteImage }: TAttachPreviewProps) => {
    const [images, setImages] = useState<React.ReactNode[] | null>(null);

    const onDelete = (index: number) => () => onDeleteImage(index);

    useEffect(
        () => {
            if (attachments === null) {
                return;
            }

            const images = [];

            for(let i = 0; i < attachments.length; i++) {
                const attach = attachments[i];
                const imageSrc = URL.createObjectURL(attach);
                const image = (
                    <div
                        className='dialog-input__attachments-image-wrapper'
                        key={`i=${i}__${attach.name}`}
                    >
                        <img
                            className='dialog-input__attachments-image'
                            src={imageSrc}
                        />
                        <button
                            type='button'
                            className='dialog-input__attachments-image-delete-button'
                            title='Удалить изображение'
                            onClick={onDelete(i)}
                        />
                    </div>
                );

                images.push(image);
            }

            setImages(images);
        },
        [attachments]
    );

    return (
        <LayoutWithShadow className='dialog-input__attachments-wrapper'>
            <h6 className='dialog-input__attachments-title'>Прикрепленные файлы:</h6>
            <LayoutScroll className='dialog-input__attachments-scroll'>
                {images}
            </LayoutScroll>
        </LayoutWithShadow>
    )
}