import React, { useEffect } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import { Contacts } from '../../../containers/Contacts';
import { Dialog } from '../../../containers/Dialog';
import { NoDialog } from '../../../containers/Dialog/noDialog';
import { LoaderStatus } from '../../../components/LoaderStatus';

import { fetchContacts } from '../../../store/actions/contacts';

import { TReduxDispatch, TStoreState } from '../../../store/types';
import { THomeDispatchProps, THomeProps, THomeStateProps } from './types';

const mapStateToProps = (state: TStoreState): THomeStateProps => ({
    contactsStatus: state.contactsReducer.dataStatus,
    contacts: state.contactsReducer.data,
});

const mapDispatchToProps = (dispatch: TReduxDispatch): THomeDispatchProps => (
    bindActionCreators(
        {
            fetchContacts: fetchContacts
        },
        dispatch
    )
)

export const Home = connect(mapStateToProps, mapDispatchToProps)(
    ({ contacts, contactsStatus, fetchContacts }: THomeProps) => {
        const history = useHistory();

        useEffect(
            () => {
                const onKeyDown = (e: KeyboardEvent) => {
                    if (e.code !== 'Escape') {
                        return;
                    }

                    history.push('/@me')
                };

                window.addEventListener('keydown', onKeyDown);

                const removeListener = () => window.removeEventListener('keydown', onKeyDown);

                return removeListener;
            },
            []
        );

        useEffect(() => {
            fetchContacts();
        }, [])

        return (
            <LoaderStatus dataStatus={contactsStatus} textForSpinner=''>
                <div className='home-page-wrapper'>
                    <Contacts dialogs={contacts} dataStatus={contactsStatus} />
                    <Switch>
                        <Route exact path='/@me' component={NoDialog} />
                        <Route path='/@me/:userId' component={Dialog} />
                    </Switch>
                </div>
            </LoaderStatus>
        );
    }
);