import { axios } from './index';

export const dialogsApi = {
    getDialogMessages: (id: string) => axios.get(`/messages?dialogId=${id}`)
};
