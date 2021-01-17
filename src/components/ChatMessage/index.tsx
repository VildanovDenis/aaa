import React, { memo, useMemo } from 'react';
import classNames from 'classnames';

import { convertMessageDateToSting } from './convertMessageDateToSting';

import { TChatMessageProps } from './types';
import { MessageStatus } from '../MessageStatus';
import { UserAvatar } from '../UserAvatar';

export const ChatMessage = memo((props: TChatMessageProps) => {
    const dateOfMessage = useMemo(
        () => props?.date ? convertMessageDateToSting(props.date) : null,
        [props.date]
    );

    return (
        <section className='chat-message-wrapper'>
            <div
                className={classNames(
                    'chat-message',
                    {
                        'chat-message--by-me': props.userId === props.senderId
                    }
                )}
            >
                {/*User's avatar*/}
                <UserAvatar
                    className='chat-message__avatar-wrapper'
                    isOnline={false}
                    name={props.senderName}
                    imageSrc={props.senderImage}
                />

                {/*Message + date of message*/}
                <div
                    className={classNames(
                        'chat-message__message',
                        {
                            'chat-message__message--by-me': props.userId === props.senderId
                        }
                    )}
                >
                    {(props.isTyping || props.message) && (
                        <div
                            className={classNames(
                                'chat-message__message-bubble',
                                {
                                    'chat-message__message-bubble--by-me': props.userId === props.senderId
                                }
                            )}
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
                                    className={classNames(
                                        'chat-message__attach',
                                        {
                                            'chat-message__attach--one': props?.attachment?.length === 1,
                                        }
                                    )}
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
                {props.userId === props.senderId && props?.status && (
                    <MessageStatus status={props.status} className={'chat-message__icon'} />
                )}
            </div>
        </section>
    )
});