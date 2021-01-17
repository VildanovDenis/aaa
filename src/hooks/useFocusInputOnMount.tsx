import React, { useEffect, useRef } from 'react';

/**
 * Hook for focusing ref input on mounting.
 */
export const useFocusInputOnMount = (): React.RefObject<HTMLInputElement> => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef?.current?.focus();
    }, [])

    return inputRef;
}