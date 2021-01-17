import React from 'react';
import classNames from 'classnames';

import { TMessageStatusProps } from './types';
import { messageStatuses } from '../../types';

export const MessageStatus = (props: TMessageStatusProps) => {
    const { className, status } = props;

    return (
        <div
            className={
                classNames(
                    'message-status',
                    className,
                    {
                        'message-status--delivered': status === messageStatuses.delivered,
                        'message-status--seen': status === messageStatuses.seen,
                        'message-status--errored': status === messageStatuses.errored,
                    }
                )
            }
        />
    )
}