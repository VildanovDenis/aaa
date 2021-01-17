import React, { RefObject } from 'react';

export type TLayoutScrollProps = {
    children: React.ReactNode;
    forwardedRef?: RefObject<HTMLDivElement> | null | undefined;
    className?: string;
}