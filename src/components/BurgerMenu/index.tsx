import React from 'react';
import classNames from 'classnames';

import { TBurgerMenuProps } from './types';

export const BurgerMenu = (props: TBurgerMenuProps) => {
    return (
        <button
            className={classNames(
                'burger-menu',
                {
                    'burger-menu--is-opened': props.isOpened
                }
            )}
            onClick={props.toggleIsOpened}
        >
            <span className='burger-menu__part burger-menu__part--1' />
            <span className='burger-menu__part burger-menu__part--2' />
            <span className='burger-menu__part burger-menu__part--3' />
        </button>
    )
}
