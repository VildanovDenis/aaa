import React from 'react';

import { TNoContentProps } from './types';

import noContent from './img/empty.svg';

/**
 * Компонент, оповещающий об отсутствии контента
 */
export const NoContent = ({
    wrapperClassname = '',
    imageClassname = '',
    titleClassname = '',
    title = 'Пока что тут пусто 🐦'
}: TNoContentProps) => (
    <div className={`no-content ${wrapperClassname}`}>
        <img
            alt='В данный момент контент на странице отсутствует'
            src={noContent}
            className={`no-content__image ${imageClassname}`}
        />
        <h5 className={`no-content__title ${titleClassname}`}>{title}</h5>
    </div>
);
