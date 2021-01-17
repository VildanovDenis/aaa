import React, { useCallback, useMemo, useState } from 'react';
import { differenceInMinutes } from 'date-fns';

import { LayoutScroll } from '../../components/LayoutScroll';
import { NavLink } from 'react-router-dom';
import { DialogUser } from '../../components/DialogUser';
import { FieldText } from '../../components/FieldText';
import { BurgerMenu } from '../../components/BurgerMenu';

import { TContactsProps } from './types';

/**
 * Contacts component renders available contacts
 * @param dialogs {Array<Contact>}
 * @param dataStatus {string}
 */
export const Contacts = ({
    dialogs = [],
    dataStatus
}: TContactsProps) => {
    const [search, setSearch] = useState('');
    const [isMenuOpened, setIsMenuOpened] = useState(false);

    const handleSearch = useCallback(
        (e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value),
        []
    );

    const toggleMenu = useCallback(
        (e: React.MouseEvent<HTMLButtonElement>) => {
            e.preventDefault();
            e.stopPropagation();

            const newValue = !isMenuOpened;

            setIsMenuOpened(newValue);
        },
        [isMenuOpened]
    );

    const contacts = useMemo(
        () => {
            const sortedDialogs = dialogs.sort((a, b) => {
                return 0;
                // if (a.message === undefined && b.message === undefined) {
                //     return 0;
                // }
                //
                // if (a.message === undefined) {
                //     return 1;
                // }
                //
                // if (b.message === undefined) {
                //     return 1;
                // }
                //
                // const dateA = a.message.date;
                // const dateB = a.message.date;
                // const result = differenceInMinutes(dateB, dateA);
                //
                // return result as number;
            });

            if (search === '') {
                return sortedDialogs;
            }

            const filteredDialogs = sortedDialogs.filter(
                contact => {
                    const newSearch = search.toLowerCase();
                    const newFullName = `${contact.name} ${contact?.surname || ''}`.toLowerCase();
                    const isIncludes = newFullName.includes(newSearch);

                    return isIncludes;
                }
            );

            return filteredDialogs;
        },
        [dialogs, search]
    );

    return (
        <>
            <header className='contacts-header'>
                <BurgerMenu isOpened={isMenuOpened} toggleIsOpened={toggleMenu} />
                <span className='contacts-header__title'>НЕУЮТНЫЙ ЧАТ</span>
            </header>
            <div className='contacts-search'>
                <FieldText
                    label='Поиск по контактам'
                    name='contactsSearch'
                    id='contactsSearch'
                    value={search}
                    onChange={handleSearch} />
            </div>
            <LayoutScroll className='contacts-nav-scroll-container'>
                <nav className='contacts-nav'>
                    {contacts.map(item => {
                        const fullName = `${item.name} ${item.surname || ''}`;
                        const newMessage = item?.message ? {
                            ...item.message,
                            date: new Date(item.message.date)
                        } : null;

                        return (
                            <NavLink
                                key={item.contactId}
                                to={`/@me/${item.dialogId}`}
                                className='contacts-user-nav'
                                activeClassName='contacts-user-nav--active'
                            >
                                <DialogUser
                                    ownerId='1'
                                    name={fullName}
                                    contactImage={item.contactImage}
                                    contactId={item.contactId}
                                    message={newMessage || null}
                                    isOnline={item.isOnline}
                                />
                            </NavLink>
                        )
                    })}
                </nav>
            </LayoutScroll>
        </>
    )
}
