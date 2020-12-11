import React, { memo } from 'react';
import classNames from 'classnames';

import { TButtonProps } from './types';

/**
 * Button
 */
export const Button = memo(({ children, className, type = 'button', ...spreadProps }: TButtonProps) => {
    return (
        <>
            <button
                className={classNames(className, 'button')}
                type={type}
                {...spreadProps}
            >
                {children}
            </button>
        </>
    );
});