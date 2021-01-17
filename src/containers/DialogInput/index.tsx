import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { FieldText } from '../../components/FieldText';
import { AttachPreview } from './AttachPreview';

import { TDialogInput } from './types';

import smile from './img/smile.svg';
import micro from './img/micro.svg';
import plane from './img/plane.svg';
import paperclip from './img/paperclip.svg';
import axios from 'axios';


/**
 * Dialog input for dialog
 * @param shouldDisableAll {boolean}
 * @param dialogId {string}
 */
export const DialogInput = ({ shouldDisableAll, dialogId }: TDialogInput) => {
    const attachFileRef = useRef<HTMLInputElement>(null);
    const [value, setValue] = useState('');
    const [images, setImages] = useState<File[] | null>(null);

    /**
     * Инпут не анмаунтится при изменении чата, поэтому очищаем значения при изменении id чата
     */
    useEffect(
        () => {
            setValue('');
            setImages(null);
        },
        [dialogId]
    );

    const onChange = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => {
            const { value } = e.target;

            setValue(value);
        },
        []
    );

    const onInputFileChange = useCallback(
        async (e: React.ChangeEvent<HTMLInputElement>) => {
            const { files } = e.target;

            if (!files) {
                return;
            }

            if (files.length === 0) {
                return;
            }


            const filesAsArray = Array.from(files);

            setImages(filesAsArray);
        },
        []
    );

    const onAddAttachClick = useCallback(
        () => {
            if (!attachFileRef.current) {
                return;
            }

            attachFileRef.current.click();

        }, [attachFileRef.current]
    );

    const onDeleteImage = useCallback(
        (indexToDelete) => {
            if (images?.length === 1) {
                setImages(null);
                return;
            }

            const newImages = images?.filter((_item, index) => index !== indexToDelete) || null;

            setImages(newImages)
        },
        [images, setImages]
    );

    const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
        e.preventDefault();

        if (images) {
            for (let i = 0; i < images.length; i++) {
                const formData = new FormData();

                formData.append('key', '079HMOQSc3d423e826a3eeefebff338eebdb7921');
                formData.append('fileupload', images[i]);

                try {
                    const res = await axios.post(
                        'https://post.imageshack.us/upload_api.php',
                        formData,
                        {
                            headers: {
                                'Content-Type': 'multipart/form-data'
                            }
                        }
                    );

                    console.log(res);
                } catch(e) {
                    console.error(e);
                }
            }
        }

    }

    const isDisabledFromOutside = useMemo(
        () => {
            if (shouldDisableAll === null) {
                return false;
            }

            return shouldDisableAll;
        },
        [shouldDisableAll]
    );

    return (
        <div className='dialog-input-container'>
            <button
                type='button'
                className='dialog-input-icon-wrapper dialog-input__smile-button'
                disabled={isDisabledFromOutside}
            >
                <img
                    alt=''
                    className='dialog-input-icon dialog-input__smile-image'
                    src={smile}
                />
            </button>
            <FieldText
                label='Введите сообщение'
                name='message'
                id='message-input'
                classNameForFieldWrapper='dialog-input-wrapper'
                classNameForInput='dialog-input'
                classNameForLabel='dialog-input-label'
                value={value}
                onChange={onChange}
                disabled={isDisabledFromOutside}
            />
            <button
                type='button'
                className='dialog-input-icon-wrapper dialog-input__paperclip-button'
                onClick={onAddAttachClick}
                disabled={isDisabledFromOutside}
            >
                <img
                    alt=''
                    className='dialog-input-icon dialog-input__paperclip-image'
                    src={paperclip}
                />
            </button>
            <input
                className='display-none'
                type='file'
                accept='.jpg, .png, .jpeg, .gif'
                multiple={true}
                onChange={onInputFileChange}
                ref={attachFileRef}
                disabled={isDisabledFromOutside}
            />
            {
                value || images?.length ? (
                    <button
                        type='button'
                        className='dialog-input-icon-wrapper dialog-input__plane-button'
                        disabled={isDisabledFromOutside}
                        onClick={handleSubmit}
                    >
                        <img
                            alt=''
                            className='dialog-input-icon dialog-input__plane-image'
                            src={plane}
                        />
                    </button>
                ) : (
                    <button
                        type='button'
                        className='dialog-input-icon-wrapper dialog-input__micro-button'
                        disabled={isDisabledFromOutside}
                    >
                        <img
                            alt=''
                            className='dialog-input-icon dialog-input__micro-image'
                            src={micro}
                        />
                    </button>
                )
            }
            {images && <AttachPreview attachments={images} onDeleteImage={onDeleteImage} />}
        </div>
    );
}