import React, { memo, useEffect, useMemo, useRef } from 'react';
import classNames from 'classnames';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';

import { ChatMessage } from '../../components/ChatMessage';
// import { ChatAudioMessage } from '../../components/ChatAudioMessage';
import { LayoutScroll } from '../../components/LayoutScroll';
import { DialogInput } from '../DialogInput';
import { NoContent } from '../../components/NoContent';
import { LoaderStatus } from '../../components/LoaderStatus';

import { TReduxDispatch, TStoreState } from '../../store/types';
import { fetchDialogData } from '../../store/actions/dialogs';
import { TProps } from './types';
import { dataStatuses } from '../../types';

const mapStateToProps = (state: TStoreState) => ({
    dialogs: state.dialogsReducer,
});

const mapDispatchToProps = (dispatch: TReduxDispatch) => (
    bindActionCreators(
        {
            fetchDialogData
        }, dispatch
    )
);

/**
 * Dialog component, renders dialog input and messages
 */
export const Dialog = connect(mapStateToProps, mapDispatchToProps)(
    memo(({ dialogs, fetchDialogData }: TProps) => {
        const scrollRef = useRef<HTMLDivElement | null>(null);
        const params = useParams<{userId: string}>();
        const dataStatus = dialogs[params.userId]?.status || null;
        const isOnline = false;

        const isFetching = useMemo(
            () => {
                const status = dialogs[params.userId]?.status;

                const isFetching = (
                    status === null
                    || status === dataStatuses.fetching
                    || status === dataStatuses.initial
                );

                return isFetching;
            },
            [dialogs, params.userId]
        );

        useEffect(
            () => {
                const status = dialogs[params.userId]?.status;

                if (status !== dataStatuses.success) {
                    fetchDialogData(params.userId);
                }
            },
            [params.userId]
        );

        useEffect(
            () => {
                const { current } = scrollRef;

                if (params.userId && !isFetching && current) {
                    current.scrollTo(0, current.scrollHeight);
                }
            },
            [isFetching, scrollRef, params.userId]
        );

        return (
            <>
                <header className='dialog-header'>
                    <span className='dialog-header__name'>User ID: {params.userId}</span>
                    <span
                        className={classNames(
                            'dialog-header__status',
                            {
                                'dialog-header__status--online': isOnline,
                            },
                        )}
                    >
                        {isOnline ? 'Онлайн' : 'Оффлайн'}
                    </span>
                </header>
                <LayoutScroll forwardedRef={scrollRef} className='dialog-wrapper'>
                    <LoaderStatus dataStatus={dataStatus} textForSpinner='Загрузка сообщений...'>
                        {
                            !isFetching
                            && dialogs[params.userId]?.messages?.length !== 0
                            && (
                                <div>
                                    {dialogs[params.userId]?.messages?.map(
                                        (item, index) => {
                                            const {
                                                senderName,
                                                senderSurname = '',
                                                date,
                                                ...restItem
                                            } = item;
                                            const fullName = `${senderName} ${senderSurname}`;
                                            const newDate = new Date(date);

                                            return (
                                                <ChatMessage
                                                    key={index}
                                                    senderName={fullName}
                                                    date={newDate}
                                                    {...restItem}
                                                    userId='1'
                                                />
                                            )
                                        }
                                    )}
                                </div>
                            )
                        }
                        {
                            !isFetching
                            && !dialogs[params.userId]?.messages?.length
                            && <NoContent />
                        }
                    </LoaderStatus>
                </LayoutScroll>
                <DialogInput shouldDisableAll={isFetching} dialogId={params.userId} />
            </>
        )
    })
);
