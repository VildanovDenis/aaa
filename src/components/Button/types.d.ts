import React from 'react';

export type TButtonProps = {
    children: React.ReactNode;
    onClick: (e) => void;
    type?: 'submit' | 'button';
    className?: string;
    [key: string | number]: null;
}