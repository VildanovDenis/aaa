import { AnyAction, Dispatch } from 'redux';
import { TState } from './reducers/types';
import { ThunkAction } from 'redux-thunk';

export type TReduxDispatch = Dispatch<AnyAction>

export type TStoreState = TState

export type TStateAction<T = void> = ThunkAction<T, TStoreState, void, AnyAction>

