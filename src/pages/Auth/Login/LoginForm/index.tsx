import React, { memo, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';

import { Button, ControlledFieldText } from '../../../../components';

import { useFocusInputOnMount } from '../../../../hooks/useFocusInputOnMount';
import { loginFormScheme } from './validationScheme';

import { TLoginForm } from './types';

/**
 * Form for login page
 */
export const LoginForm = memo(() => {
    const refForInputToFocus = useFocusInputOnMount();

    const { control, handleSubmit, errors } = useForm<TLoginForm>({
        resolver: yupResolver(loginFormScheme),
        defaultValues: {
            login: '',
            password: '',
        }
    });

    const onSubmit = useCallback((data: TLoginForm) => console.log(data), []);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ControlledFieldText
                label='Логин'
                id='login'
                name='login'
                defaultValue=''
                required
                forwardedRef={refForInputToFocus}
                control={control}
                error={errors?.login}
            />
            <ControlledFieldText
                label='Пароль'
                id='password'
                name='password'
                defaultValue=''
                type='password'
                required
                control={control}
                error={errors?.password}
            />
            <Button
                type='submit'
                className='w100 login-form__button'
                onClick={handleSubmit(onSubmit)}
            >
                Войти
            </Button>
        </form>
    )
});