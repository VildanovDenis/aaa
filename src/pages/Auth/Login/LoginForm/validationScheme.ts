import * as yup from 'yup';

export const loginFormScheme = yup.object().shape({
    login: yup.string().min(6, 'Минимальное количество символов - 6').required('Обязательно поле'),
    password: yup.string().min(6, 'Минимальное количество символов - 6').required('Обязательное поле'),
});