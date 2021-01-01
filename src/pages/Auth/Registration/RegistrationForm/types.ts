export type TRegistrationFormProps = {
    setIsRequestSent: (isSent: boolean) => void;
}

export type TRegistrationForm = {
    email: string;
    name: string;
    surname: string;
    password: string;
    rePassword: string;
}