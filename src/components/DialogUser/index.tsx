import React, { useMemo } from 'react';

import { convertLastMessageDateToSting } from './convertLastMessageDateToString';

import { TDialogUserProps } from './types';
import { MessageStatus } from '../MessageStatus';
import { UserAvatar } from '../UserAvatar';

export const DialogUser = (props: TDialogUserProps) => {
    const date = useMemo(
        () => props?.message?.date ? convertLastMessageDateToSting(props.message.date) : null,
        [props.message?.date]
    );

    return (
        <div className='dialog-user__wrapper'>
            <UserAvatar
                isOnline={props.isOnline}
                name={props.name}
                imageSrc={props?.contactImage}
                className='dialog-user__avatar'
            />
            <div className='dialog-user__info'>
                <div className='dialog-user__info-name-and-date'>
                    <h5 className='dialog-user__info-name' title={props.name}>
                        {props.name}
                    </h5>
                    {date && (
                        <span className='dialog-user__info-date'>
                            {date}
                        </span>
                    )}
                </div>
                <div className='dialog-user__info-message-and-counter'>
                    <span className='dialog-user__info-last-message'>
                        {
                            props?.message?.user?.id === props?.ownerId
                            && props?.message?.message
                            && 'Вы: '
                        }
                        {props?.message?.message || 'Сообщений пока нет'}
                        {
                            props?.message?.user?.id === props?.ownerId
                            && props?.message?.message
                            && (
                                <MessageStatus
                                    status={props?.message?.status}
                                    className={'dialog-user__message-status'}
                                />
                            )}
                    </span>
                    {props?.unreadMessagesCount && (
                        <div className='dialog-user__info-counter'>
                            {props?.unreadMessagesCount}
                        </div>
                    )}
                </div>
            </div>
        </div>
    )
}