import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { ControlledFieldText } from '../../../../components/FieldText';
import { Button } from '../../../../components/Button';

import { useFocusInputOnMount } from '../../../../hooks/useFocusInputOnMount';
import { registrationFormScheme } from './validationScheme';

import { TRegistrationForm, TRegistrationFormProps } from './types';

/**
 * Form for registration page
 */
export const RegistrationForm = ({ setIsRequestSent }: TRegistrationFormProps) => {
    const refForInputToFocus = useFocusInputOnMount();
    const { control, handleSubmit, errors } = useForm<TRegistrationForm>({
        resolver: yupResolver(registrationFormScheme),
        defaultValues: {
            email: '',
            name: '',
            surname: '',
            password: '',
            rePassword: '',
        },
    });

    const onSubmit = useCallback(async (data: TRegistrationForm) => {
        setTimeout(() => setIsRequestSent(true), 5000);
        alert(JSON.stringify(data, null, 4));
    }, [setIsRequestSent]);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ControlledFieldText
                label='E-mail'
                name='email'
                id='email'
                required
                forwardedRef={refForInputToFocus}
                control={control}
                error={errors?.email}
            />
            <ControlledFieldText
                label='Имя'
                name='name'
                id='name'
                required
                control={control}
                error={errors?.name}
            />
            <ControlledFieldText
                label='Фамилия'
                name='surname'
                id='surname'
                control={control}
                error={errors?.surname}
            />
            <ControlledFieldText
                label='Пароль'
                name='password'
                id='password'
                type='password'
                required
                control={control}
                error={errors?.password}
            />
            <ControlledFieldText
                label='Повторите пароль'
                name='rePassword'
                id='rePassword'
                type='password'
                required
                control={control}
                error={errors?.rePassword}
            />
            <Button
                type='submit'
                className='w100 registration-form__button'
                onClick={handleSubmit(onSubmit)}
            >
                Зарегистрироваться
            </Button>
        </form>
    );
};