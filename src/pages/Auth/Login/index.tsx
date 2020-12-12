import React  from 'react';
import { Link } from 'react-router-dom';

import { LoginForm } from './LoginForm';
import { LayoutWithShadow } from '../../../components';

/**
 * Login page
 */
export const Login = () => {

    return (
        <section className='auth-content-container'>
            <h2>Вход в чат</h2>
            <p>Введите ваш логин и пароль</p>
            <LayoutWithShadow className='auth-content'>
                <LoginForm />
                <Link to='/registration'>
                    Зарегистрироваться
                </Link>
            </LayoutWithShadow>
        </section>
    )
};