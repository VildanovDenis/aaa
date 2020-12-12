import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { LayoutWithShadow } from '../../../components';
import { RegistrationForm } from './RegistrationForm';

/**
 * Registration page
 */
export const Registration = () => {
    const [ isRequestSent, setIsRequestSent ] = useState<boolean>(false);

    return (
        <section className='auth-content-container'>
            <h2>Регистрация в чате</h2>
            <p>Заполните форму регистрации</p>
            <LayoutWithShadow className='auth-content'>
                {
                    !isRequestSent
                        ? (
                            <RegistrationForm setIsRequestSent={setIsRequestSent} />
                        ) : (
                            <>
                                <h4>i</h4>
                                <h5>Подтвердите регистрацию</h5>
                                <p>На вашу почту отправлено письмо с ссылкой для подтверждения регистрации</p>
                            </>
                        )
                }
                <Link to='/login'>
                    Войти
                </Link>
            </LayoutWithShadow>
        </section>
    )
};