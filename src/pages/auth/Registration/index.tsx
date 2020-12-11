import React  from 'react';
import { Link } from 'react-router-dom';

import { LayoutWithShadow } from '../../../components';
import { RegistrationForm } from './RegistrationForm';

/**
 * Registration page
 */
export const Registration = () => {

    return (
        <section className='auth-content-container'>
            <h2>Регистрация в чате</h2>
            <p>Заполните форму регистрации</p>
            <LayoutWithShadow className='auth-content'>
                <RegistrationForm />
                <Link to='/login'>
                    Войти
                </Link>
            </LayoutWithShadow>
        </section>
    )
};