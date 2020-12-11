import React from 'react';
import { Control, FieldError, FieldErrors } from 'react-hook-form';

export type TProps = {
    /**
     * label отвечает за подписку к полю
     */
    label: string;
    name: string;
    id: string;
    value?: string | number;
    type?: 'text' | 'password';
    required?: boolean;
    classNameForFieldWrapper?: string;
    classNameForField?: string;
    classNameForInput?: string;
    classNameForError?: string;
    classNameForLabel?: string;
}

export type TFieldTextProps = TProps & {
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
    error?: string | null;
    onFocus?: (e) => void;
    onBlur?: (e) => void;
}

export type TControlledTextProps = TProps & {
    defaultValue?: string;
    control: Control;
    type?: 'text' | 'password';
    error?: FieldError;
}