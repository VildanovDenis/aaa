import React  from 'react';
import classNames from 'classnames';

import { TLayoutScrollProps } from './types';

export const LayoutScroll = ({ className, forwardedRef, children }: TLayoutScrollProps) => {
    return (
        <div ref={forwardedRef} className={classNames('layout-scroll', className)}>
            {children}
        </div>
    )
};
