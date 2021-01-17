import { differenceInHours, format } from 'date-fns';
import { ru } from 'date-fns/locale'

const hoursInDay = 24;
const dateFormatDDMMYYYY = 'dd.MM.yyyy';
const dateFormatHHmm = 'HH:mm';

/**
 * Converts date of message into the string or null if there is no date of message;
 */
export const convertLastMessageDateToSting = (date: number | Date | undefined): null | string => {
    if (!date) {
        return null;
    }

    const diffInHours = differenceInHours(new Date(), date);

    if (diffInHours < hoursInDay) {
        return format(date, dateFormatHHmm, { locale: ru })
    }

    return format(date, dateFormatDDMMYYYY, { locale: ru })
}