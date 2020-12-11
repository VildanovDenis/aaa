import React from 'react';
import classNames from 'classnames';
import { Controller } from 'react-hook-form';

import { TControlledTextProps, TFieldTextProps } from './types';

/**
 * Input text with label and error inside.
 * Can be used without form
 */
export const FieldText = (
    {
        classNameForError,
        classNameForInput,
        classNameForLabel,
        classNameForField,
        classNameForFieldWrapper,
        error = null,
        id,
        label,
        value,
        required,
        forwardedRef,
        ...restProps
    }: TFieldTextProps) => (
    <div className={classNames(classNameForFieldWrapper, 'field-wrapper')}>

        {/* Input + label */}
        <div className={classNames(classNameForField, 'field')}>
            <input
                className={
                    classNames(
                        classNameForInput,
                        'field-input',
                        {
                            'field-input-invalid': error,
                            'field-input-with-value': value,
                        }
                    )
                }
                id={id}
                value={value}
                ref={forwardedRef}
                {...restProps}
            />
            <label htmlFor={id} className={classNames(classNameForLabel, 'field-label')}>
                {label}
                {required && '*'}
            </label>
        </div>

        {/* Error for Field */}
        {error && <p className={classNames(classNameForError, 'field-error')}>{error}</p>}
    </div>
);

/**
 * Wrapped FieldText component into react-hook-form Controller component.
 * Should be used with react-hook-form.
 */
export const ControlledFieldText = (
    { control, name, defaultValue = '', error, ...rest }: TControlledTextProps
) => (
    <Controller
        control={control}
        name={name}
        defaultValue=''
        render={({ onChange, onBlur, value }) => (
            <FieldText
                name={name}
                value={value}
                onChange={onChange}
                onBlur={onBlur}
                error={error?.message}
                {...rest}
            />
        )}
    />
);
