import React, { useEffect } from 'react';

/**
 * Hook for deleting element if clicking outside
 */
export const useClickOutside = (ref: React.RefObject<HTMLElement>, callback: () => void) => {
    const handleClick = (e: Event) => {
        if (ref.current && e.target instanceof HTMLElement && !ref.current.contains(e.target)) {
            callback();
        }
    };

    useEffect(
        () => {
            document.addEventListener('click', handleClick);

            return () => document.removeEventListener('click', handleClick);
        },
        []
    );
}