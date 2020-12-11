import React, { useCallback } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import { ControlledFieldText } from '../../../../components/FieldText';

import { TRegistrationForm } from './types';
import { Button } from '../../../../components/Button';
import { yupResolver } from '@hookform/resolvers/yup';

const schemeRegistrationForm = yup.object().shape({
    name: yup.string().required('Обязательное поле'),
    surname: yup.string(),
    email: yup
        .string()
        .email('Введите email. Например example@gmail.com.')
        .required('Обязательное поле'),
    password: yup
        .string()
        .min(6, 'Минимальное количество символов - 6')
        .required('Обязательное поле'),
    rePassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Пароли должны совпадать')
        .required('Обязательное поле')
})

export const RegistrationForm = () => {
    const { control, handleSubmit, errors } = useForm<TRegistrationForm>({
        resolver: yupResolver(schemeRegistrationForm)
    });

    const onSubmit = useCallback((data: any) => console.log(data), []);

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ControlledFieldText
                label='E-mail'
                name='email'
                id='email'
                required
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