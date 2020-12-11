import React, { memo, useCallback } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

import { Button, ControlledFieldText } from '../../../../components';

import { useFocusInputOnMount } from '../../../../hooks/useFocusInputOnMount';

import { TLoginForm } from './types';

const loginFormSchema = yup.object().shape({
    login: yup.string().min(6, 'Минимальное количество символов - 6').required('Обязательно поле'),
    password: yup.string().min(6, 'Минимальное количество символов - 6').required('Обязательное поле'),
});

export const LoginForm = memo(() => {
    const refForFirstInput = useFocusInputOnMount();

    const { control, handleSubmit, errors } = useForm<TLoginForm>({
        resolver: yupResolver(loginFormSchema),
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
                forwardedRef={refForFirstInput}
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