import React, { useMemo } from 'react';
import classNames from 'classnames';

import { TUserAvatarProps } from './types';

export const UserAvatar = (props: TUserAvatarProps) => {
    const bgNumber = useMemo(
        () => props.name.charCodeAt(0) % 10 % 5,
        [props.name]
    );

    return (
        <div
            className={classNames(
                'avatar-wrapper',
                props.className,
                {
                    'avatar-wrapper--online': props?.isOnline
                }
            )}
        >
            {
                props?.imageSrc
                    ? (
                        <div className='avatar-image-wrapper'>
                            <img
                                alt=''
                                className={classNames('avatar-image', props?.imageClassName)}
                                src={props.imageSrc}
                            />
                        </div>
                    ) : (
                        <div
                            className={classNames(
                                'avatar-text', `avatar-text--${bgNumber}`, props?.imageClassName
                            )}
                        >
                            <span>{props.name[0]}</span>
                        </div>
                    )
            }
        </div>
    )
};