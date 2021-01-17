import { axios } from './index';

export const contactsApi = {
    getContacts: () => axios.get('/contacts')
};
