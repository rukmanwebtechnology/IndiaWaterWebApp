import {
    ActionReducerMap,
    MetaReducer
} from '@ngrx/store';
import { environment } from '../environments/environment';

export interface State {};
export const rootReducer: ActionReducerMap<State> = { };

export const metaReducer: MetaReducer<State>[] = !environment.production ? [] : [];