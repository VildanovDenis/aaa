import React, { useEffect, useRef } from 'react';

export const useFocusInputOnMount = (): React.RefObject<HTMLInputElement> => {
    const inputRef = useRef<HTMLInputElement>(null);

    useEffect(() => {
        inputRef?.current?.focus();
    }, [])

    return inputRef;
}