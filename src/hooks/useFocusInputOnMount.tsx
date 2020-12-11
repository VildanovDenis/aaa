import React, { useEffect, useRef } from 'react';

/**
 * Hook for focusing input on mounting.
 */
export const useFocusInputOnMount = (): React.RefObject<HTMLInputElement> => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef?.current?.focus();
    }, [])

    return inputRef;
}