import React, { memo, useMemo } from 'react';
import classNames from 'classnames';
import { differenceInHours, format, formatDistanceToNow } from 'date-fns';
import { ru } from 'date-fns/locale'

import { TChatMessageProps } from './types';

const hoursInDay = 24;
const dateFormatDDMMYYYYDDMM = 'd.MM.yyyy HH:mm';

export const ChatMessage = memo((props: TChatMessageProps) => {
    const diffInDates = useMemo(() => differenceInHours(new Date(), props.date), [props.date]);

    return (
        <section className='chat-message-wrapper'>
            <div
                className={
                    classNames(
                        'chat-message',
                        {
                            'chat-message--by-me': props.userId === props.senderId
                        }
                    )
                }
            >
                {/*User's avatar*/}
                <div className='chat-message__avatar-wrapper'>
                    <img
                        src={props.imageSrc}
                        className='chat-message__avatar'
                        alt='user-avatar'
                    />
                </div>

                {/*Message + date of message*/}
                <div
                    className={
                        classNames(
                            'chat-message__message',
                            {
                                'chat-message__message--by-me': props.userId === props.senderId
                            }
                        )
                    }
                >
                    <div
                        className={
                            classNames(
                                'chat-message__message-bubble',
                                {
                                    'chat-message__message-bubble--by-me': props.userId === props.senderId
                                }
                            )
                        }
                    >
                        <p className='chat-message__message-text'>
                            {props.message}
                        </p>
                    </div>
                    <p
                        className={
                            classNames(
                                'chat-message__date',
                                {
                                    'chat-message__date--by-me': props.userId === props.senderId
                                }
                            )
                        }
                    >
                        {
                            diffInDates < hoursInDay
                                ? (
                                    formatDistanceToNow(props.date, { locale: ru, addSuffix: true })
                                ) : (
                                    format(props.date, dateFormatDDMMYYYYDDMM, { locale: ru })
                                )
                        }
                    </p>
                </div>

                {/* isRead */}
                {props.userId === props.senderId && (
                    <div
                        className={
                            classNames(
                                'chat-message__icon',
                                {
                                    'chat-message__icon--is-read': props.isRead,
                                }
                            )
                        }
                    />
                )}
            </div>
        </section>
    )
});