import React from 'react';
import { Control, FieldError } from 'react-hook-form';

export type TProps = {
    /**
     * label for input element
     */
    label: string;
    /**
     * name of the input for setting value in form
     */
    name: string;
    /**
     * unique id for focusing input when clicking on label
     */
    id: string;
    /**
     * value of the input
     */
    value?: string | number;
    /**
     * type of the text input, password or text
     */
    type?: 'text' | 'password';
    /**
     * should be input required
     */
    required?: boolean;
    /**
     * should disable input
     */
    disabled?: boolean;
    /**
     * React.refObject to get input element
     */
    forwardedRef?: React.RefObject<HTMLInputElement>;
    /**
     * classNames for Field elements
     */
    classNameForFieldWrapper?: string;
    classNameForField?: string;
    classNameForInput?: string;
    classNameForError?: string;
    classNameForLabel?: string;
}

export type TFieldTextProps = TProps & {
    /**
     * onChange handler for input
     */
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    /**
     * onFocus handler for input
     */
    onFocus?: (e: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * onBlur handler for input
     */
    onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
    /**
     * error to show with input
     */
    error?: string | null;
}

export type TControlledTextProps = TProps & {
    /**
     * if input used with react-hook-form, can pass default value
     */
    defaultValue?: string;
    /**
     * control from react-hook-form hook
     */
    control: Control;
    /**
     * error from validation form
     */
    error?: FieldError;
}