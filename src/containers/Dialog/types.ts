import { TDialogsState } from '../../store/reducers/dialogs/types';
import { fetchDialogData } from '../../store/actions/dialogs';

export type TStateProps = {
    dialogs: TDialogsState;
}

export type TDispatchProps = {
    fetchDialogData: typeof fetchDialogData;
}

export type TProps = TDispatchProps & TStateProps