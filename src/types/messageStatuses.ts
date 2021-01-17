import { TDictionary } from './dictionary';

export type TMessageStatuses = 'error' | 'delivered' | 'seen';

export const messageStatuses: TDictionary<TMessageStatuses> = {
    error: 'error',
    delivered: 'delivered',
    seen: 'seen',
};
