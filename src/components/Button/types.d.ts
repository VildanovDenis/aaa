import React from 'react';

export type TButtonProps = {
    /**
     * React.Node.
     * Can pass everything what needed inside button icon, text, etc.
     */
    children: React.ReactNode;
    /**
     * Button handler
     */
    onClick: (e: React.SyntheticEvent<HTMLButtonElement>) => void;
    /**
     * Button type, submit or button
     */
    type?: 'submit' | 'button';
    /**
     * Css className for button
     */
    className?: string;
    /**
     * Should disable button or not
     */
    disabled?: boolean;
}