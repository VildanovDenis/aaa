import React from 'react';

import { TLoaderStatusProps } from './types';
import { dataStatuses } from '../../types';
import { Spinner } from '../Spinner';

/**
 * Renders Spinner, error message, or children depending on the dataStatus
 * @param dataStatus {'initial' | 'fetching' | 'updating' | 'error' | 'success'}
 * @param children {ReactNode}
 * @param textForSpinner {string}
 * @param classNameForSpinnerWrapper {string}
 */
export const LoaderStatus = ({
    dataStatus,
    children,
    textForSpinner,
    classNameForSpinnerWrapper = ''
}: TLoaderStatusProps) => {
    if (
        dataStatus === dataStatuses.initial
        || dataStatus === dataStatuses.fetching
        || dataStatus === dataStatuses.updating
    ) {
        return (
            <Spinner text={textForSpinner} wrapperClassName={classNameForSpinnerWrapper} />
        );
    }

    if (dataStatus === dataStatuses.error) {
        return (
            <div>
                Произошла ошибка...
            </div>
        )
    }

    if (dataStatus !== dataStatuses.success) {
        return (
            <div>Что-то пошло не так: dataStatus: {dataStatus}</div>
        );
    }

    return (
        <>
            {children}
        </>
    );
};