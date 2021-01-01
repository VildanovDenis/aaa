import * as yup from 'yup';

const passwordRe = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$^+=!*()@%&]).{6,}$/;
const lowerCaseRe = /(?=.*[a-z])/;
const upperCaseRe = /(?=.*[A-Z])/;
const numberRe = /(?=.*\d)/;
const specialChar = /(?=.*[#$^+=!*()@%&])/;

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
        .matches(lowerCaseRe, 'Введите хотя бы одну букву нижнего регистра')
        .matches(upperCaseRe, 'Введите хотя бы одну букву верхнего регистра')
        .matches(numberRe, 'Введите хотя бы одну цифру')
        .matches(specialChar, 'Введите хотя бы 1 специальный символ из #$^+=!*()@%&')
        .matches(passwordRe, 'Слишком легкий пароль')
        .required('Обязательное поле'),
    rePassword: yup
        .string()
        .oneOf([yup.ref('password'), null], 'Пароли должны совпадать')
        .required('Обязательное поле')
})