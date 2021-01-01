import React, { memo, useMemo } from 'react';
import classNames from 'classnames';

import { convertMessageDateToSting } from "./convertMessageDateToSting";

import { messageStatuses, TChatMessageProps } from './types';

export const ChatMessage = memo((props: TChatMessageProps) => {
    const dateOfMessage = useMemo(
        () => props?.date ? convertMessageDateToSting(props.date) : null,
        [props.date]
    );

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
                    {(props.isTyping || props.message) && (
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
                            {props.message && (
                                <p className='chat-message__message-text'>
                                    {props.message}
                                </p>
                            )}
                            {props.isTyping && (
                                <div className='chat-message__typing-bubbles'>
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            )}
                        </div>
                    )}

                    <div className={classNames('chat-message__attachments')}>
                        {props?.attachment?.map((attach, index) => {
                            const { url } = attach;

                            return (
                                <div
                                    key={index}
                                    className={
                                        `chat-message__attach ${props?.attachment?.length === 1 ? 'chat-message__attach--one' : ''}`
                                    }
                                >
                                    <img src={url} alt={attach.name} />
                                </div>
                            )
                        })}
                    </div>

                    {dateOfMessage && (
                        <p
                            className={classNames(
                                'chat-message__date',
                                {
                                    'chat-message__date--by-me': props.userId === props.senderId
                                }
                            )}
                        >
                            {dateOfMessage}
                        </p>
                    )}
                </div>

                {/* isRead */}
                {props.userId === props.senderId && (
                    <div
                        className={
                            classNames(
                                'chat-message__icon',
                                {
                                    'chat-message__icon--delivered': props.status === messageStatuses.delivered,
                                    'chat-message__icon--seen': props.status === messageStatuses.seen,
                                    'chat-message__icon--errored': props.status === messageStatuses.errored,
                                }
                            )
                        }
                    />
                )}
            </div>
        </section>
    )
});