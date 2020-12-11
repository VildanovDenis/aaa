import React from 'react';
import classNames from 'classnames';

import { TLayoutWithShadowProps } from './types';

/**
 * Container with shadow and padding.
 */
export const LayoutWithShadow = ({ children, className, spacing = 'medium' }: TLayoutWithShadowProps) => (
    <div className={classNames('shadow-wrapper', `padding-${spacing}`, className)}>
        {children}
    </div>
);