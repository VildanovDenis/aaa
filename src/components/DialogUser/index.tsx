import React, { useMemo } from 'react';
import classNames from 'classnames';

import { TDialogUserProps } from './types';

export const DialogUser = (props: TDialogUserProps) => {
    const bgNumber = useMemo(
        () => props.name.charCodeAt(1) % 10 % 5,
        [props.name]
    );

    return (
        <div className='dialog-user__wrapper'>
            <div
                className={classNames(
                    'dialog-user__avatar-wrapper',
                    {
                        'dialog-user__avatar-wrapper--online': props?.isOnline
                    }
                )}
            >
                {
                    props?.avatar
                        ? (
                            <img src={props.avatar} alt='' className='dialog-user__avatar-image' />
                        ) : (
                            <div className={`dialog-user__avatar-text dialog-user__avatar-text--${bgNumber}`}>
                                <span>{props.name[0]}</span>
                            </div>
                        )
                }
            </div>
            <div className='dialog-user__info'>
                <div className='dialog-user__info--name-and-date'>
                    <h5 className='dialog-user__info--name'>{props.name}</h5>
                    {props?.date && <span className='dialog-user__info--date'>{props.date}</span>}
                </div>
                <div>
                    <span className='dialog-user__info--last-message'>
                        {props?.lastMessage || 'Сообщений пока нет'}
                    </span>
                </div>
            </div>
        </div>
    )
}