import * as yup from 'yup';

export const registrationFormScheme = yup.object().shape({
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