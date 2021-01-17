import React from 'react';
import { TDataStatuses } from '../../types/dataStatuses';

export type TLoaderStatusProps = {
    children: React.ReactNode;
    dataStatus: TDataStatuses | null;
    textForSpinner: string;
    classNameForSpinnerWrapper?: string;
}