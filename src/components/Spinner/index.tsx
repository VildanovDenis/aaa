import React from 'react';
import classNames from 'classnames';

import { TSpinnerProps } from './types';

export const Spinner = ({ spinnerClassName, wrapperClassName, text } : TSpinnerProps) => (
    <div className={classNames('spinner-wrapper', wrapperClassName)}>
        <div>
            <div className={classNames('spinner', spinnerClassName)}>Loading</div>
            {text && <p>{text}</p>}
        </div>
    </div>
);