import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import classNames from 'classnames';

import { UserAvatar } from '../UserAvatar';
import { MessageStatus } from '../MessageStatus';
import { convertMessageDateToSting } from '../ChatMessage/convertMessageDateToSting';
import { parseSecondsToTime } from './parseDurationToString';

import pause from './icons/pause.svg';
import wave from './icons/wave.svg';
import play from './icons/play.svg';

import { TChatAudioMessageProps } from './types';

export const ChatAudioMessage = (props: TChatAudioMessageProps) => {
    const audioRef = useRef<HTMLAudioElement>(null);
    const [time, setTime] = useState(0);
    const [duration, setDuration] = useState(0)
    const [isPlaying, setIsPlaying] = useState(false);

    const togglePlaying = useCallback(
        (e) => {
            e.preventDefault();

            if (audioRef?.current && !isPlaying) {
                audioRef?.current?.play();
            }

            if (audioRef?.current && isPlaying) {
                audioRef?.current?.pause();
            }
        },
        [isPlaying]
    );

    const dateOfMessage = useMemo(
        () => props?.date ? convertMessageDateToSting(props.date) : null,
        [props.date]
    );

    // Слушаем эвенты на аудиолементе чтобы обновлять состояние
    useEffect(
        () => {
            const onPlaying = () => setIsPlaying(true);
            const onEnded = () => {
                setIsPlaying(false);
                setTime(0);
            }
            const onPause = () => setIsPlaying(false);
            const onTimeUpdate = () => setTime(audioRef?.current?.currentTime || 0);
            const onDurationChange = () => setDuration(audioRef?.current?.duration || 0);

            const removeListener = () => {
                audioRef?.current?.removeEventListener('playing', onPlaying);
                audioRef?.current?.removeEventListener('ended', onEnded);
                audioRef?.current?.removeEventListener('pause', onPause);
                audioRef?.current?.removeEventListener('timeupdate', onTimeUpdate);
                audioRef?.current?.removeEventListener('durationchange', onDurationChange);
            };

            if (audioRef?.current) {
                audioRef.current.volume = 0.25;
                setDuration(audioRef?.current?.duration || 0);

                audioRef.current.addEventListener('playing', onPlaying);
                audioRef.current.addEventListener('ended', onEnded);
                audioRef.current.addEventListener('pause', onPause);
                audioRef.current.addEventListener('timeupdate', onTimeUpdate);
                audioRef.current.addEventListener('durationchange', onDurationChange);
            }

            return removeListener;
        },
        [audioRef]
    );

    const isByMe = props.userId === props.senderId;
    const progressBarWidth = duration ? (time / duration) * 100 : 0;

    return (
        <section className='chat-message-wrapper'>
            <div
                className={classNames(
                    'chat-message',
                    {
                        'chat-message--by-me': isByMe
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
                            'chat-message__message--by-me': isByMe
                        }
                    )}
                >
                    <div
                        className={classNames(
                            'chat-message__message-bubble',
                            'chat-message__message-bubble--audio',
                            {
                                'chat-message__message-bubble--by-me': isByMe
                            }
                        )}
                    >
                        <div className='audio-message__progress-bar' style={{ width: `${progressBarWidth}%` }} />
                        <div className='audio-message__control-button-wrapper'>
                            <button
                                type='button'
                                className='audio-message__control-button'
                                onClick={togglePlaying}
                            >
                                <img
                                    className={classNames(
                                        'audio-message__control-button-image',
                                        {
                                            'audio-message__control-button-image--play': !isPlaying,
                                        }
                                    )}
                                    src={isPlaying ? pause : play}
                                    alt=''
                                />
                            </button>
                        </div>
                        {/*<div*/}
                        {/*    className={classNames(*/}
                        {/*        'audio-message__wave-image-wrapper',*/}
                        {/*        {*/}
                        {/*            'audio-message__wave-image-wrapper--by-me': isByMe,*/}
                        {/*        },*/}
                        {/*    )}*/}
                        {/*>*/}
                        <img className='audio-message__wave-image' src={wave} alt='' />
                        {/*</div>*/}
                        <div className='audio-message__duration'>
                            {parseSecondsToTime(time)}
                        </div>
                    </div>
                    {dateOfMessage && (
                        <p
                            className={classNames(
                                'chat-message__date',
                                {
                                    'chat-message__date--by-me': isByMe
                                }
                            )}
                        >
                            {dateOfMessage}
                        </p>
                    )}
                </div>

                {/* isRead */}
                {isByMe && props?.status && (
                    <MessageStatus status={props.status} className={'chat-message__icon'} />
                )}
            </div>
            <audio
                className='chat-audio-message__audio'
                preload='auto'
                ref={audioRef}
                src={props.audioSrc}
            />
        </section>
    )
}